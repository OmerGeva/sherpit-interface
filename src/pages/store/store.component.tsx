import React, { useState, useEffect } from 'react';
import { StorePageContainer } from "./store.styles";
import { useParams } from 'react-router-dom';

// External
import axios from 'axios';
import { store } from '../../redux/store';

// Components
import ProductCard from "../../components/product-card/product-card.component";
import SearchBar from "../../components/search-bar/search-bar.component";

interface StorePageProps {
    currentUser: any
}

interface ParamTypes {
    storeId: string
  }

type ProductTypes = {
    description: string,
    id: string,
    product_image: string,
    title: string,
    price: string
    
}

const StorePage: React.FC <StorePageProps> = ({currentUser}) => {

    const { storeId } = useParams<ParamTypes>();

    const [products, setProducts] = useState([]);
    const [store, setStore] = useState<any>(null);
    const [searchQuery, setSearchQuery] = useState("");
    
    const fetchProducts = async () => {
        const apiUrl = `http://localhost:3001/stores/${storeId}`
        try{
            const response = await axios.get(apiUrl, { 
                headers: { Authorization: `Bearer ${currentUser.token}` }
            })
    
            // await console.log(response);
            await setProducts(response.data.products);
            await setStore(response.data.store);
        }catch(error){
          console.log(error);
        }
    
      }
    useEffect(()=>{
        fetchProducts();

      }, [currentUser])
    return (
        <StorePageContainer>
            <div className="top-banner">
                <img src={store ? store.brand_image : ""} alt=""/>
            </div>
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <div className="products-container">
                {
                    products.map((product: ProductTypes) => 
                    <ProductCard key={product.id} product={product} store={store}/>
                    )
                }
            </div>
        </StorePageContainer>
    );
};

export default StorePage;