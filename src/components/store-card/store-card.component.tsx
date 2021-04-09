import React from 'react';
import { Link } from "react-router-dom";
import { StoreCardContainer } from "./store-card.styles";

import costoImage from "../../assets/costco.png";
interface StoreCardProps {
    store: {
        id: number,
        created_at: string,
        name: string,
        online: boolean,
        type_of_brand: string,
        updated_at: string,
        website: string,
        brand_image: string
    }
}
const StoreCard: React.FC <StoreCardProps> = ({store}) => {
    return (
        <StoreCardContainer>
            <Link to={`store/${store.name.toLowerCase()}`}>
            <img src={store.brand_image} alt="costco"/>
                <div className='info-container'>
                    <div className='store-title'>{store.name}</div>
                    <div className='store-description'>{store.type_of_brand}</div>
                </div>
            </Link>
        </StoreCardContainer>
    );
};
export default StoreCard;