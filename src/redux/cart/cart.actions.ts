import { cartActionTypes } from './cart.types'

export const setCart = (cart: any) => ({
  type: cartActionTypes.SET_CART,
  payload: cart
})

export const setCartInfo = (info: any) => ({
  type: cartActionTypes.SET_CART_INFO,
  payload: info
})

export const addItemToCart = (item: any) => ({
  type: cartActionTypes.ADD_ITEM_TO_CART,
  payload: item
})

export const clearItemFromCart = (item: any) => ({
  type: cartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item
})

export const removeItem =  (item: any) => ({
  type: cartActionTypes.REMOVE_ITEM,
  payload: item
})




