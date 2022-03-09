import { cartItemType } from "../redux/cart/cartTypes"

export const UseArrangeStoresForCart = (cartItems: cartItemType[]) => {
    const organizedCartItems:any = {}
    cartItems.forEach((item: cartItemType) => {
        if(Object.keys(organizedCartItems).includes(item.store.name)){
            organizedCartItems[item.store.name][1].push(item)
            organizedCartItems[item.store.name][0] += (+ item.product.price) * item.count
        } else {
            organizedCartItems[item.store.name] = [];
            organizedCartItems[item.store.name][1] = [item]
            organizedCartItems[item.store.name][0] = (+ item.product.price) * item.count
        }
    })
    return organizedCartItems;
}

