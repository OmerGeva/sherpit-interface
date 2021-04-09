export const addItemToCart = (cartItems: [any], cartItemToAdd: any) => {

  const existingCartItem = cartItems.find(
      cartItem => cartItem.product.id === cartItemToAdd[0].id);
  if (existingCartItem)
    return cartItems.map(cartItem =>
      cartItem.product.id === cartItemToAdd[0].id ? { ...cartItem, count: cartItem.count + 1} : cartItem
      )
  return [...cartItems, {product: {...cartItemToAdd[0]}, count: 1, store: {...cartItemToAdd[1]}}]
  }
  

  export const removeItemFromCart = (cartItems: [any], cartItemToRemove:  any) => {
    console.log(cartItemToRemove);
    const existingCartItem = cartItems.find(
      cartItem => cartItem.product.id === cartItemToRemove.product.id);

  
    return cartItems.map(cartItem =>
      cartItem.product.id === cartItemToRemove.product.id ?
      { ...cartItemToRemove, count: cartItemToRemove.count - 1}
      :
      cartItem
    )
  
  }
  