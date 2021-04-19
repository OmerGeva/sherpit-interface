import React, { useState, useRef } from 'react';
import { CartItemContainer } from "./cart-item.styles";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, clearItemFromCart, removeItem } from "../../redux/cart/cart.actions";

// External
import { CgMathPlus, CgMathMinus } from 'react-icons/cg';
import { IoTrash } from 'react-icons/io5';
import { IconContext } from "react-icons";

// Effects
import { useOnClickOutside } from '../../effects/use-on-click-outside'

// API
import { addItemToCartDatabase } from "../../api/axios";
import { cartItemType } from '../../redux/cart/cartTypes';

interface CartItemProps {
    cartItem: cartItemType
    orderId: number
}

const CartItem: React.FC <CartItemProps> = ({cartItem, orderId}) => {
    const dispatch = useDispatch();
    const currentUser = useSelector((state: any) => state.user.currentUser);
    const ref = useRef<HTMLDivElement>(null);

    const [changeCountOpen, setChangeCountOpen] = useState(false);
    
    useOnClickOutside(ref, () => setChangeCountOpen(false));

    const handleResponse = (response: any, addingItem: boolean) =>  {
        if(response.status === 200){
            addingItem ?
                dispatch(addItemToCart([cartItem.product, cartItem.store]))
                    : 
                cartItem.count === 1 ? 
                dispatch(clearItemFromCart(cartItem))
                    :
                dispatch(removeItem(cartItem))
        } else {
            console.log('something went wrong... ')
        }
    }

    const handleAddToCart = async (numberToAdd: number) => {    
        try{
         const response = await addItemToCartDatabase(currentUser.token, orderId, cartItem.product, numberToAdd);

         await handleResponse(response, numberToAdd == 1 );
        }catch(error){
          console.log("Something went wrong ...");
        }


    }
    return (
        <CartItemContainer>
            <div className={changeCountOpen ? 'count-open' : ''}></div>
            <img src={cartItem.product.product_image} alt={cartItem.product.title}/>
            <p className='product-title'>{cartItem.product.title}</p>

            <div className={`product-count ${changeCountOpen ? 'change-count-open' : ''}`} onClick={() => setChangeCountOpen(true)} ref={ref}>
                {
                    changeCountOpen ?
                        <div className="count-icon-container minus" onClick={() => handleAddToCart(-1)}>
                            <IconContext.Provider value={{ className: "count-icon" }}>
                                {cartItem.count === 1 ?
                                    <IoTrash />
                                :
                                    <CgMathMinus /> 
                                }
                            </IconContext.Provider>
                        </div>
                    : ''
                }
                    
                <div className='item-count'>
                    {cartItem.count}    
                </div>
                {
                    changeCountOpen ?
                        <div className="count-icon-container plus" onClick={() => handleAddToCart(1)}>
                            <IconContext.Provider value={{ className: "count-icon" }}>
                                <CgMathPlus />
                            </IconContext.Provider>
                        </div>
                    : ''
                }
            </div>
            <div className="flex-grower"></div>
            <p className='product-total'>$ {Math.round(cartItem.count * (+cartItem.product.price) * 100) / 100}</p>
            
        </CartItemContainer>
    );
};

export default CartItem;