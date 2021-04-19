import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AppContainer } from './app.styles';

// Redux
import { useSelector, useDispatch } from "react-redux";
import { resetApp } from "./redux/root-reducer";
import { userType } from './redux/user/useTypes';

// Pages
import HomePage from "./pages/home/home.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import StoresPage from "./pages/stores/stores.component";
import StorePage from "./pages/store/store.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import FourOhFourPage from "./pages/404/404.component";
import OrdersPage from "./pages/orders/orders.component";

import AdminHomepage from "./pages/admin-homepage/admin-homepage.component";
import MiddlemanHomepage from "./pages/middleman-homepage/middleman-homepage.component";



// Components
import Navbar from "./components/navbar/navbar.component";
import CartSideBar from "./components/cart-side-bar/cart-side-bar.component";
import NotificationAlert from './components/notification-alert/notification-alert.component';

function App() {
  
  const [cartOpen, setCartOpen] = useState(false);
  const currentUser: userType = useSelector((state:any) => state.user.currentUser)
  const dispatch = useDispatch();
  // dispatch(resetApp());
  return (
    <div className="App">
      <AppContainer>
        <Navbar currentUser={currentUser} setCartOpen={setCartOpen}/>
        <div className={cartOpen ? `app-cover` : ''}></div>
        {
          currentUser && currentUser.user_type === 'customer' ?
              <CartSideBar setCartOpen={setCartOpen} cartOpen={cartOpen}/>
            :
              ''
        }
        <Switch>
          <Route exact path='/' render={(props) => currentUser ? currentUser.user_type === 'customer' ?
                                                                    <StoresPage currentUser={currentUser} /> 
                                                                  :
                                                                    currentUser.user_type === 'middleman' ?
                                                                      <MiddlemanHomepage currentUser={currentUser} /> 
                                                                      :
                                                                      <OrdersPage currentUser={currentUser} /> 
                                                                : <SignInAndSignUp  />} />
          <Route exact path='/store/:storeId' render={(props) => currentUser ? currentUser.user_type === 'customer' ?
                                                                    <StorePage currentUser={currentUser} /> 
                                                                  :
                                                                    currentUser.user_type === 'middleman' ?
                                                                      <MiddlemanHomepage currentUser={currentUser} /> 
                                                                      :
                                                                      <OrdersPage currentUser={currentUser} /> 
                                                                : <SignInAndSignUp  />} />
          <Route exact path='/checkout' render={(props) => currentUser ? <CheckoutPage currentUser={currentUser} /> : <SignInAndSignUp  />} />
          <Route exact path='/orders' render={(props) => currentUser ? currentUser.user_type === 'customer' ?
                                                                    <OrdersPage currentUser={currentUser} /> 
                                                                  :
                                                                    currentUser.user_type === 'middleman' ?
                                                                      <MiddlemanHomepage currentUser={currentUser} /> 
                                                                      :
                                                                      <OrdersPage currentUser={currentUser} /> 
                                                                : <SignInAndSignUp  />} />
          <Route path='/' render={() => <FourOhFourPage />} />
        </Switch>
        <NotificationAlert />

      </AppContainer>
    </div>
  );
}

export default App;
