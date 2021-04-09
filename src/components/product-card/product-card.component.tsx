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

interface ProductProps {
    product: {
        description: string,
        id: string,
        product_image: string,
        title: string,
        price: string
    }
    store: any
}


const ProductCard: React.FC<ProductProps> = ({product, store}) => {
    const dispatch = useDispatch();
    const orderId = useSelector((state: any) => state.cart.cartInfo.id);
    const currentUser = useSelector((state: any) => state.user.currentUser);

    const handleResponse = (response: any) =>  {
        if(response.status === 200){
            dispatch(addItemToCart([product, store]))
        } else {
            console.log('something went wrong... ')
        }
    }

    const handleAddToCart = async () => {
        const apiUrl = `http://localhost:3001/orders/${orderId}` 
    
        try{
         const response = await axios.patch(
          apiUrl,
            {
                orderId: orderId,
                product: product,
            },
            {
                headers: { Authorization: `Bearer ${currentUser.token}` }
            }
          )
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