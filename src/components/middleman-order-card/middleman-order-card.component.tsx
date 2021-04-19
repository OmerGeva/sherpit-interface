import React from 'react';
import { MiddlemanOrderCardContainer } from "./middleman-order-card.styles";

import { useSelector } from "react-redux";

// Effects
import { months, ordinal } from "../../effects/date-utils";
// API
import { acceptOrder } from "../../api/axios";



interface MiddlemanOrderCardProps {
    estimatedDate: Date,
    brand: {
        brandImage: string,
        brandName: string
    },
    orderId: number
    isPending?: boolean,
    setChangedOrderStatus: React.Dispatch<React.SetStateAction<boolean>>,
    changedOrderStatus: boolean
}

const MiddlemanOrderCard: React.FC<MiddlemanOrderCardProps> = ({brand, estimatedDate, orderId, isPending, changedOrderStatus, setChangedOrderStatus}) => {
    const currentUser = useSelector((state: any) => state.user.currentUser);
    const handleClick = async (accept: boolean) => {
        const response = await acceptOrder(currentUser.token, orderId, accept);
        await setChangedOrderStatus(!changedOrderStatus);
        // if(response.status === 200){
            
        // }else{
        //     console.log('Something went wrong...')
        // }
    }

    return (
        <MiddlemanOrderCardContainer>
            <div className="order-info">
                <img src={brand.brandImage} alt={brand.brandName}/>
                <div className="more-info">
                    <p>{brand.brandName}</p>
                    <p>Deliver by: <strong>{`${months[estimatedDate.getMonth()]} ${ordinal(estimatedDate.getDate() + 12)}` }</strong></p>
                </div>
            </div>
            {
                isPending ?
                    <div className="order-actions">
                        <div className="accept" onClick={() => handleClick(true)}>Accept</div>
                        <div className="decline" onClick={() => handleClick(false)}>Decline</div>
                    </div>
                :
                    <div className="mark-as-delivered">
                        <div>Mark as delivered</div>
                    </div>
                
            }
        </MiddlemanOrderCardContainer>
    );
};

export default MiddlemanOrderCard;