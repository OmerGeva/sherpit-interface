import React, { useState, useEffect } from 'react';
import { OrdersPageContainer } from "./orders.style";

// Effects
import { UseArrangeStoresForCart } from '../../effects/use-arrange-stores-for-cart'

// API
import { getOrders } from "../../api/axios";
import { userAddressType, userType } from '../../redux/user/useTypes';
import { cartItemType, orderType } from '../../redux/cart/cartTypes';
import OrderPreview from '../../components/order-preview/order-preview.component';


interface OrderPageProps {
    currentUser: userType,
    openBackdrop: React.Dispatch<React.SetStateAction<boolean>>
}

export type selectedOrderType = {
    order: orderType,
    receipt_image: string,
    sent_receipt_image: string,
    middleman: {
        info: userType,
        address: userAddressType
    } | null,
    order_products: cartItemType[]
}

const OrdersPage: React.FC <OrderPageProps> = ({currentUser, openBackdrop}) => {
    const [orders, setOrders] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState<selectedOrderType | any >({});
    const fetchOrders = async () => {
        try{
            const response = await getOrders(currentUser.token);
            console.log(response);
            await setOrders(response.data);
        }catch(error) {
            console.log(error);
        }
    }
    
    const sumUpItemOut = (orderProducts: cartItemType[]) => {
        let itemCount = 0;

        orderProducts.forEach((item: cartItemType) => {
            itemCount += item.count 
        })
        return itemCount;
    }
    useEffect(() => {
        fetchOrders();
    }, [currentUser])
    return (
        <OrdersPageContainer>
            <div className="all-orders">
                <h1>{currentUser.user_type === 'superuser' ? 'All ': 'My'} Orders</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Items</th>
                            <th>Total</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order:any) => 
                                <tr onClick={(() => setSelectedOrder(order))} key={order.id} className={selectedOrder === order ? 'selected-row' : ''}>
                                    <td>{order.id}</td>
                                    <td>{sumUpItemOut(order.order_products)}</td>
                                    <td>$ {order.order_total}</td>
                                    <td className='pending-row'><div className={order.pending ? "pending dot" : "dot confirmed"}></div>{order.pending ? 'pending' : 'confirmed'}</td>
                                </tr>
    
                                )
                        }
                    </tbody>
                </table>

            </div>
            {
                 selectedOrder.id &&
                    <div className="chosen-order">
                        <OrderPreview selectedOrder={selectedOrder} openBackdrop={openBackdrop}/>
                    </div>
            }
        </OrdersPageContainer>
    );
};

export default OrdersPage;