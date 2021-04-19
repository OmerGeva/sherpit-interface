import React, { useState, useEffect } from 'react';
import { StoresPageContainer } from "./stores.styles";

// Components
import StoreCard from "../../components/store-card/store-card.component";

// API
import { getStores } from "../../api/axios";
import { userType } from '../../redux/user/useTypes';

interface StoresPageProps {
    currentUser: userType
}

const StoresPage: React.FC <StoresPageProps> = ({currentUser}) => {

    const [stores, setStores] = useState([]);

    const fetchStores = async () => {
        try{
            const response = await getStores(currentUser.token);
    
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