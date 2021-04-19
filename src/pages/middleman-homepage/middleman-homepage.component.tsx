import React, { useState, useEffect } from 'react';
import { MiddlemanHomepageContainer } from './middleman-homepage.styles';

// Redux
import { userType } from '../../redux/user/useTypes';

// Components
import MiddlemanOrderCard from "../../components/middleman-order-card/middleman-order-card.component";

// API
import { getOrders } from "../../api/axios";
import { orderType } from '../../redux/cart/cartTypes';


interface MiddlemanHomepageProps {
    currentUser: userType
}
const MiddlemanHomepage: React.FC <MiddlemanHomepageProps> = ({currentUser}) => {
    const [orders, setOrders] = useState<Array<orderType>>([]);
    const [pendingOrders, setPendingOrders] = useState<Array<orderType>>([]);
    const [changedOrderStatus, setChangedOrderStatus] = useState(false);
    const fetchOrders = async () => {
        try{
            const response = await getOrders(currentUser.token);
            console.log(response);
            await setOrders(response.data.orders);
            await setPendingOrders(response.data.pending_orders);
        }catch(error) {
            console.log(error);
        }
    }
    
    useEffect(() => {
        fetchOrders();
    }, [changedOrderStatus])

    return (
        <MiddlemanHomepageContainer>
            <h2>Your Orders</h2>
            <div className="orders-container">
                {
                    orders.map((order: any) => 
                    <MiddlemanOrderCard 
                    estimatedDate={new Date(order.order.updated_at)}
                    orderId={order.order.id}
                    setChangedOrderStatus={setChangedOrderStatus}
                    changedOrderStatus={changedOrderStatus}
                    key={order.order.id}
                    brand={{brandImage: order.order_products[0].store.brand_image, brandName: order.order_products[0].store.name}}
                    />
                    )
                }
            </div>
            <h2>Pending Orders</h2>
            <div className="orders-container">
                {
                    pendingOrders.map((order: any) => 
                    <MiddlemanOrderCard 
                    estimatedDate={new Date(order.order.updated_at)}
                    orderId={order.order.id}
                    setChangedOrderStatus={setChangedOrderStatus}
                    changedOrderStatus={changedOrderStatus}
                    key={order.order.id}
                    brand={{brandImage: order.order_products[0].store.brand_image, brandName: order.order_products[0].store.name}}
                    isPending
                    />
                    )
                }
            </div>
        </MiddlemanHomepageContainer>
    );
};

export default MiddlemanHomepage;