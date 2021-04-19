import React from 'react';
import { Link } from "react-router-dom";
import { StoreCardContainer } from "./store-card.styles";

import costoImage from "../../assets/costco.png";
import { storeType } from '../../redux/cart/cartTypes';
interface StoreCardProps {
    store: storeType
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