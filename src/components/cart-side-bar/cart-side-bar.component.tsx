import React, { useRef } from 'react';

import { CartSideBarContainer } from './cart-side-bar.styles'
import { Link } from "react-router-dom";

// Redux
import { useSelector } from "react-redux";

// import { RootState } from '../../redux/store';

// External
import { CgMathPlus } from 'react-icons/cg';
import { IconContext } from "react-icons";

// Components 
import CartItem from "../cart-item/cart-item.component";
import Spinner from "../spinner/spinner.component";


// Effects
import { useOnClickOutside } from '../../effects/use-on-click-outside'
import { UseArrangeStoresForCart } from '../../effects/use-arrange-stores-for-cart'

interface CartSideBarProps {
    setCartOpen: React.Dispatch<React.SetStateAction<boolean>>,
    cartOpen: boolean
}

const CartSideBar: React.FC <CartSideBarProps> = ({setCartOpen, cartOpen}) => {
    const ref = useRef<HTMLDivElement>(null);
    const cartItems = useSelector((state: any) => state.cart.cartItems);
    const cartInfo = useSelector((state: any) => state.cart.cartInfo);
    useOnClickOutside(ref, () => setCartOpen(false));
    const organizedCartItems = UseArrangeStoresForCart(cartItems);
    return (
        <CartSideBarContainer ref={ref}>
            {
                cartInfo ?
                <div className={cartOpen ? 'side-bar-container open' : 'side-bar-container'}>
                <div className="close-sidebar-button" onClick={() => setCartOpen(false)}>
                    <IconContext.Provider value={{ className: "exit-x" }}>
                        <CgMathPlus />
                    </IconContext.Provider>
                    Close
                </div>
                <div className="heading-container">
                    <h2>Personal Cart</h2>
                </div>
                {
                    Object.keys(organizedCartItems).map((brand, index) => {
                        const store = organizedCartItems[brand][1];
                        return(
                            <div className='cart-store-container' key={brand}>
                                <div className="top-info">
                                <img src={store[0].store.brand_image} alt={store[0].store.name}/>
                                <h3>{store[0].store.name}</h3>
                                <div className="flex-grower"></div>
                                <p>${Math.round(organizedCartItems[brand][0] * 100) / 100}</p>
                                </div>
                            {
                                store.map((cartItem:any) => 
                                <CartItem key={cartItem.product.id} cartItem={cartItem} orderId={cartInfo.id}/>
                                )
                            }
                            </div>
                        )
                    })
                }
                <Link to='/checkout'>
                    <div className="review-cart-button" onClick={() => setCartOpen(false)}>
                        <p>Review Cart</p>
                        <div className="total-price">
                            ${
                                cartInfo.order_total
                            }
                        </div>
                    </div>
                </Link>
            </div>
            :
            <Spinner />

            }
        </CartSideBarContainer>
    );
};

export default CartSideBar;