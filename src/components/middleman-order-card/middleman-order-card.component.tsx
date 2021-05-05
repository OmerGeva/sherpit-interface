import React, { useState } from 'react';
import { MiddlemanOrderCardContainer } from "./middleman-order-card.styles";

// Redux
import { useSelector } from "react-redux";

// Components
import CustomModal from '../custom-modal/custom-modal.component';

// Effects
import { months, ordinal } from "../../effects/date-utils";

// API
import { acceptOrder } from "../../api/axios";

// External
import { MdInfo } from 'react-icons/md';
import { IconContext } from "react-icons";

// Types
import { middlemanOrderType, orderType } from '../../redux/cart/cartTypes';



interface MiddlemanOrderCardProps {
    estimatedDate: Date,
    brand: {
        brandImage: string,
        brandName: string
    },
    orderId: number
    isPending?: boolean,
    changedOrderStatus: boolean,
    seeMoreInfo: boolean,
    order: middlemanOrderType,
    setChangedOrderStatus: React.Dispatch<React.SetStateAction<boolean>>,
    setSeeMoreInfo: React.Dispatch<React.SetStateAction<boolean>>,
    openBackdrop: React.Dispatch<React.SetStateAction<boolean>>,
    setSelectedOrder: React.Dispatch<React.SetStateAction<middlemanOrderType | null>>,
    handleMarkOrderAsDelivered?: (orderId: number) => void
}

const MiddlemanOrderCard: React.FC<MiddlemanOrderCardProps> = (
    {brand, 
     estimatedDate, 
     orderId, isPending, 
     changedOrderStatus, 
     setChangedOrderStatus, 
     seeMoreInfo, 
     setSeeMoreInfo,
     setSelectedOrder, 
     order,
     openBackdrop,
     handleMarkOrderAsDelivered}) => {

    const currentUser = useSelector((state: any) => state.user.currentUser);
    const [markAsDelivered, setMarkAsDelivered] = useState(false);

    const handleClick = async (accept: boolean) => {
        const response = await acceptOrder(currentUser.token, orderId, accept);
        await setChangedOrderStatus(!changedOrderStatus);
    }

    return (
        <MiddlemanOrderCardContainer>
            <div onClick={() => {openBackdrop(true); setSeeMoreInfo(true); setSelectedOrder(order)}}>
                <IconContext.Provider value={{ className: "info-icon" }}>
                    <MdInfo />
                </IconContext.Provider>
            </div>
            <div className="order-info">
                <img src={brand.brandImage} alt={brand.brandName}/>
                <div className="more-info">
                    <p>{brand.brandName}</p>
                    {
                        order.order.arriving_to_middleman ?
                                <p>Deliver by: <strong>{`${months[new Date(order.order.arriving_to_middleman!).getMonth()]} ${ordinal(new Date(order.order.arriving_to_middleman!).getDate()+2)}` }</strong></p>
                            :
                                <p>Estimated Arrival:
                                    <br/>
                                            <strong>{`${months[estimatedDate.getMonth()]} ${ordinal(estimatedDate.getDate() + 4)}` }</strong></p>
                    }
                </div>
            </div>
            {
                isPending ?
                    <div className="order-actions">
                        <div className="accept" onClick={() => handleClick(true)}>Accept</div>
                        <div className="decline" onClick={() => handleClick(false)}>Decline</div>
                    </div>
                :
                    <div className={`mark-as-delivered ${order.order.arriving_to_middleman ? 'is-ordered' : ''}`} onClick={() => order.order.arriving_to_middleman ? handleMarkOrderAsDelivered!(order.order.id) : ''}>
                        <div>
                            {
                                order.order.arriving_to_middleman ?
                                        'Mark as delivered'
                                    :
                                        'Waiting for confirmation'
                            }
                            
                        </div>
                    </div>
            }
        </MiddlemanOrderCardContainer>
    );
};

export default MiddlemanOrderCard;