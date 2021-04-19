import { cartItemType, productType, storeType } from "./cartTypes";

export const addItemToCart = (cartItems: cartItemType[], cartItemToAdd: [productType, storeType]) => {

  const existingCartItem = cartItems.find(
      cartItem => cartItem.product.id === cartItemToAdd[0].id);
  if (existingCartItem)
    return cartItems.map(cartItem =>
      cartItem.product.id === cartItemToAdd[0].id ? { ...cartItem, count: cartItem.count + 1} : cartItem
      )
  return [...cartItems, {product: {...cartItemToAdd[0]}, count: 1, store: {...cartItemToAdd[1]}}]
  }
  

  export const removeItemFromCart = (cartItems: cartItemType[], cartItemToRemove:  cartItemType) => {

    const existingCartItem = cartItems.find(
      cartItem => cartItem.product.id === cartItemToRemove.product.id);

  
    return cartItems.map(cartItem =>
      cartItem.product.id === cartItemToRemove.product.id ?
      { ...cartItemToRemove, count: cartItemToRemove.count - 1}
      :
      cartItem
    )
  
  }
  