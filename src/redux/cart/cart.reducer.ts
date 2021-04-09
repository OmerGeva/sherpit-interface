import { cartActionTypes } from './cart.types';
import { addItemToCart, removeItemFromCart } from './cart.utils';

const INITIAL_STATE = {
  cartItems: [],
  cartInfo: null
}

const cartReducer = (state:any = INITIAL_STATE, action: any) => {
  switch(action.type){
    case cartActionTypes.SET_CART:
      return {
         ...state,
         cartItems: action.payload
      }
    case cartActionTypes.SET_CART_INFO:
      return {
         ...state,
         cartInfo: action.payload
      }
    case cartActionTypes.ADD_ITEM_TO_CART:
      return {
         ...state,
         cartItems: addItemToCart(state.cartItems, action.payload),
         cartInfo: {...state.cartInfo, order_total: (+ state.cartInfo.order_total) + (+ action.payload[0].price)}
      }
    case cartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((cartItem: any) => cartItem.product.id !== action.payload.product.id)
      }
    case cartActionTypes.REMOVE_ITEM:
      return{
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      }
    default:
      return state;
  }
};

export default cartReducer;
