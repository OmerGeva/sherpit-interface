import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";
import { AppContainer } from './app.styles';

// Pages
import HomePage from "./pages/home/home.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import StoresPage from "./pages/stores/stores.component";
import StorePage from "./pages/store/store.component";

// Components
import Navbar from "./components/navbar/navbar.component";
import CartSideBar from "./components/cart-side-bar/cart-side-bar.component";

function App() {
  
  const [cartOpen, setCartOpen] = useState(false);
  const currentUser = useSelector((state:any) => state.user.currentUser)

  return (
    <div className="App">
      <AppContainer>

        <Navbar currentUser={currentUser != null} setCartOpen={setCartOpen}/>
        <div className={cartOpen ? `app-cover` : ''}></div>
        <CartSideBar setCartOpen={setCartOpen} cartOpen={cartOpen}/>
        <Route exact path='/' render={(props) => currentUser ? <StoresPage currentUser={currentUser} /> : <SignInAndSignUp  />} />
        <Route exact path='/store/:storeId' render={(props) => currentUser ? <StorePage currentUser={currentUser} /> : <SignInAndSignUp  />} />
      </AppContainer>
    </div>
  );
}

export default App;
