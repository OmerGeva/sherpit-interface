
export const UseArrangeStoresForCart = (cartItems: any) => {
    const organizedCartItems:any = {}
    // [{store: {}}, {store: {}}, {store: {}}, {store: {}}]
    cartItems.forEach((item: any) => {
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

