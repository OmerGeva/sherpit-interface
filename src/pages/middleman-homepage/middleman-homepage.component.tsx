import React, { useState, useEffect, useRef } from 'react';
import { MiddlemanHomepageContainer } from './middleman-homepage.styles';

// Redux
import { userType } from '../../redux/user/useTypes';
import { orderType } from '../../redux/cart/cartTypes';

// Components
import MiddlemanOrderCard from "../../components/middleman-order-card/middleman-order-card.component";
import CustomModal from '../../components/custom-modal/custom-modal.component';


// API
import { getOrders } from "../../api/axios";


interface MiddlemanHomepageProps {
    currentUser: userType,
    openBackdrop: React.Dispatch<React.SetStateAction<boolean>>
}
const MiddlemanHomepage: React.FC <MiddlemanHomepageProps> = ({currentUser, openBackdrop}) => {
    const [orders, setOrders] = useState<Array<orderType>>([]);
    const [pendingOrders, setPendingOrders] = useState<Array<orderType>>([]);
    const [changedOrderStatus, setChangedOrderStatus] = useState(false);
    const [seeMoreInfo, setSeeMoreInfo] = useState<boolean>(false);
    const [selectedOrder, setSelectedOrder] = useState<orderType | null>(null);
    const [orderConfirmationId, setOrderConfirmationId] = useState<number>();
    const [markOrderAsSent, setMarkOrderAsSent] = useState<boolean>(false);

    const handleMarkOrderAsDelivered = (orderId: number) => {
        openBackdrop(true);
        setOrderConfirmationId(orderId);
        setMarkOrderAsSent(true);
        
    }

    const fetchOrders = async () => {
        try{
            const response = await getOrders(currentUser.token);
            // console.log(response);
            await setOrders(response.data.orders);
            await setPendingOrders(response.data.pending_orders);
        }catch(error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchOrders();
    }, [changedOrderStatus])
    console.log(orders);    
    console.log(pendingOrders);    
    return (
        <MiddlemanHomepageContainer>
            <h2>Your Orders</h2>
            <div className="orders-container">
                {
                    orders.map((order: orderType) => 
                    <MiddlemanOrderCard 
                    estimatedDate={new Date(order.updated_at)}
                    orderId={order.id}
                    setChangedOrderStatus={setChangedOrderStatus}
                    order={order}
                    setSelectedOrder={setSelectedOrder}
                    changedOrderStatus={changedOrderStatus}
                    key={order.id}
                    brand={{brandImage: order.order_products[0].store.brand_image, brandName: order.order_products[0].store.name}}
                    setSeeMoreInfo={setSeeMoreInfo}
                    seeMoreInfo={seeMoreInfo}
                    openBackdrop={openBackdrop}
                    orderSent={order.sent_receipt_image === ''}
                    handleMarkOrderAsDelivered={handleMarkOrderAsDelivered}
                    />
                    )
                }
            </div>
            <h2>Pending Orders</h2>
            <div className="orders-container">
                {
                    pendingOrders.map((order: orderType) => 
                    <MiddlemanOrderCard 
                        estimatedDate={new Date(order.updated_at)}
                        orderId={order.id}
                        order={order}
                        setSelectedOrder={setSelectedOrder}
                        setChangedOrderStatus={setChangedOrderStatus}
                        changedOrderStatus={changedOrderStatus}
                        key={order.id}
                        brand={{brandImage: order.order_products[0].store.brand_image, brandName: order.order_products[0].store.name}}
                        isPending
                        setSeeMoreInfo={setSeeMoreInfo}
                        seeMoreInfo={seeMoreInfo}
                        orderSent={false}
                        openBackdrop={openBackdrop}
                    />
                    )
                }
            </div>
            {
                seeMoreInfo &&
                <CustomModal setCloseModal={setSeeMoreInfo} typeOfModal={'MIDDLEMAN-ORDER-INFO'} openBackdrop={openBackdrop} selectedOrder={selectedOrder}/>
            }
            {
                markOrderAsSent &&
                <CustomModal setCloseModal={setMarkOrderAsSent} typeOfModal={'MARK-AS-SENT'} openBackdrop={openBackdrop} orderId={orderConfirmationId} selectedOrder={selectedOrder}/>
            }
           
        </MiddlemanHomepageContainer>
    );
};

export default MiddlemanHomepage;