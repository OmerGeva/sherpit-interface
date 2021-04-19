import React, { useState } from 'react';
import { CheckoutPageContainer } from "./checkout.styles";
import { useHistory } from 'react-router-dom';

// Redux
import { useDispatch } from "react-redux";
import { setCart, setCartInfo } from '../../redux/cart/cart.actions'

import { useSelector } from "react-redux";
import { userType } from '../../redux/user/useTypes';


// Components
import Spinner from "../../components/spinner/spinner.component";

// Effects
import { UseArrangeStoresForCart } from '../../effects/use-arrange-stores-for-cart'
import { months, ordinal } from "../../effects/date-utils";

// API
import { orderProduct } from "../../api/axios";

interface CheckoutProps {
    currentUser: userType
}

const CheckoutPage: React.FC <CheckoutProps> = (props) => {
    const history = useHistory();

    const currentUser = props.currentUser;
    const dispatch = useDispatch();
    const cartItems = useSelector((state: any) => state.cart.cartItems);
    const cartInfo = useSelector((state: any) => state.cart.cartInfo);
    const [selectedShipping, setSelectedShipping] = useState('UPS Standard Delivery');
    const estimatedDate = new Date();
    estimatedDate.setDate(estimatedDate.getDate() + 9);

    const organizedCartItems = UseArrangeStoresForCart(cartItems);

    const handleConfirmOrderResponse = (response: any) => {
        const user = response.data.user;
        const cart = response.data.cart;
        const cartInfo = response.data.cart_info;

        dispatch(
          setCart(cart)
        )
        dispatch(
          setCartInfo(cartInfo)
        )
        console.log(`Order Confirmed!`);
        history.push('/orders')

    }

    const handleOrderProduct = async () => {
        const response = await orderProduct(currentUser.token, cartInfo.id, selectedShipping)

        await handleConfirmOrderResponse(response);
    }

    const sumUpItemOut = (items: [any]) => {
        let itemCount = 0;
        items.forEach(item => {
            itemCount += item.count
        })

        return itemCount;
    }

    return (
        <CheckoutPageContainer>

            <div className="stores-side">
                <h2 className="store-type-title">
                    Retail
                </h2>
                <div className="stores-container">

                {
                    cartInfo ?
                    Object.keys(organizedCartItems).map((brand, index) => {
                        const store = organizedCartItems[brand][1];
                        return(
                            <div className='checkout-store-card' key={brand}>
                                    <img src={store[0].store.brand_image} alt={store[0].store.name}/>
                                    <p>Total Items: <span className='total-item-count'>{sumUpItemOut(store)}</span></p>
                                    <p>Estimated Delivery: <span className='total-item-count'>{ `${months[estimatedDate.getMonth()]} ${ordinal(estimatedDate.getDate())}` }</span></p>
                                </div>
                            )
                        })
                        :
                        <Spinner />
                    }
                    </div>
            </div>  
            <div className="payment-side">
                <div className="complete-checkout-button" onClick={handleOrderProduct}>
                    Complete Checkout
                </div>
                <div className="totals-count">
                    <div className="price-text">
                        <p>Subtotal:</p>
                        <p>${cartInfo.order_total}</p>
                    </div>
                    <div className="price-text">
                        <p>Service Fee:</p>
                        <p>$2</p>
                    </div>
                    <div className="shipping-container">
                        <p>Shipping</p>
                        <div className="shipping-types">
                            <div className={selectedShipping == 'UPS Standard Delivery' ? 'shipping-type selected-shipping' : 'shipping-type'}
                            onClick={() => setSelectedShipping('UPS Standard Delivery')}
                            >
                                <p className="shipping-title">UPS Standard Delivery</p>
                                <p className="shipping-price">$ 14.45</p>
                            </div>
                            <div className={selectedShipping == 'UPS 7 Day Guarantee' ? 'shipping-type selected-shipping' : 'shipping-type'}
                            onClick={() => setSelectedShipping('UPS 7 Day Guarantee')}
                            >
                                <p className="shipping-title">UPS 7 Day Guarantee</p>
                                <p className="shipping-price">$ 24.45</p>
                            </div>
                        </div>
                    </div>
                    <div className="price-text">
                        <p>Total: </p>
                        <p><strong>
                            ${
                                cartInfo.order_total  == 0 ? 
                                    0
                                :
                                    2 + Math.round(
                                    ((selectedShipping == 'UPS 7 Day Guarantee' ? 
                                        24.45
                                    :
                                        14.45) 
                                    + (+ cartInfo.order_total))
                                    * 100) / 100
                            }
                            </strong>
                            </p>
                    </div>
                </div>
            </div>
        </CheckoutPageContainer>
    );
};

export default CheckoutPage;