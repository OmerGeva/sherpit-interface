import React from 'react';
import { ProductCardContainer } from "./product-card.styles";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from '../../redux/cart/cart.actions'
// import { RootState } from '../../redux/store';

// External
import axios from 'axios';
import { HiPlus } from 'react-icons/hi';
import { IconContext } from "react-icons";

// API
import { addItemToCartDatabase } from "../../api/axios";
import { productType, storeType } from '../../redux/cart/cartTypes';
import { setNotfication } from '../../redux/user/user.actions';


interface ProductProps {
    product: productType
    store: storeType
}


const ProductCard: React.FC<ProductProps> = ({product, store}) => {
    const dispatch = useDispatch();
    const orderId = useSelector((state: any) => state.cart.cartInfo.id);
    const currentUser = useSelector((state: any) => state.user.currentUser);

    const handleResponse = (response: any) =>  {
        if(response.status === 200){
            dispatch(addItemToCart([product, store]))
            dispatch(
                setNotfication({message: `Added ${product.title} to cart!`, type: 'info'})
                )
        } else {
            dispatch(
                setNotfication({message: `Couldn't add ${product.title} to cart, try again.`, type: 'info'})
                )
        }
    }

    const handleAddToCart = async () => {    
        try{
            
         const response = await addItemToCartDatabase(currentUser.token, orderId, product, 1);
          
         await handleResponse(response);
        }catch(error){
          console.log("Something went wrong ...");
        }

    }

    return (
        <ProductCardContainer>
            <div className="add-to-cart" onClick={handleAddToCart}>
                <IconContext.Provider value={{ className: "plus-sign" }}>
                    <HiPlus />
                </IconContext.Provider>
            </div>
            <img src={product.product_image} alt={product.title}/>
            <h3>{product.title}</h3>
            <p>{product.price}</p>
            <p>{product.description}</p>

        </ProductCardContainer>
    );
};

export default ProductCard;