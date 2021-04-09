import React, { useState, useEffect } from 'react';
import { StoresPageContainer } from "./stores.styles";

// External
import axios from 'axios';

// Components
import StoreCard from "../../components/store-card/store-card.component";

interface StoresPageProps {
    currentUser: any
}

const StoresPage: React.FC <StoresPageProps> = ({currentUser}) => {

    const [stores, setStores] = useState([]);

    const fetchStores = async () => {
        const apiUrl = 'http://localhost:3001/stores' 
        try{
            const response = await axios.get(apiUrl, { headers: { Authorization: `Bearer ${currentUser.token}` }})
    
            await console.log(response);
            await setStores(response.data.stores);
        }catch(error){
          console.log(error);
        }
    
      }
    useEffect(()=>{
        fetchStores();
      }, [currentUser])

    return (
        <StoresPageContainer>
            <h3>Browse Stores</h3>
            {
                stores.map((store:any) => 
                    <StoreCard key={store.id} store={store}/>
                )
            }
            
        </StoresPageContainer>
    );
};

export default StoresPage;