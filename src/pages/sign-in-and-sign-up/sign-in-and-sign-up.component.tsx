import React, { useState, SyntheticEvent } from 'react';
import axios from 'axios';
import { useDispatch } from "react-redux";

import { setCurrentUser } from '../../redux/user/user.actions'
import { setCart, setCartInfo } from '../../redux/cart/cart.actions'

import { SignInAndSignUpPageContainer } from "./sign-in-and-sign-up.styles";
import signUpImage from "../../assets/drawkit-transport-scene-11.svg";
import FormInput from "../../components/form-input/form-input.component";

const SignInAndSignUpPage: React.FC = () => {

    const dispatch = useDispatch();

    const [isSignUp, setIsSignUp] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleLogIn = (response: any) => {
        if (response.data.status === 401){
          console.log('Wrong email/password');
        }
        else if(response.data.auth_token){
          const user = response.data.user;
          const cart = response.data.cart;
          const cartInfo = response.data.cart_info;
          dispatch(setCurrentUser(
            {
              token: response.data.auth_token,
              firstName: user.first_name, 
              lastName: user.last_name, 
              ...user
            }))
          dispatch(
            setCart(cart)
          )
          dispatch(
            setCartInfo(cartInfo)
          )
          console.log(`Welcome back!`);
        }
      }

    const handleSubmit = async (event: SyntheticEvent) => {
        event.preventDefault();
        const apiUrl = 'http://localhost:3001/authenticate' 
    
        try{
    
         const response = await axios.post(
          apiUrl,
            {
              email: email.toLowerCase(),
              password: password
            },
            {
              withCredentials: true
            }
          )
         await handleLogIn(response);
        }catch(error){
          console.log("Email or password not correct. Please try again.");
        }
    
      }
    return (
        <SignInAndSignUpPageContainer >
            <div className="left-side">
                <h2>Buy anything, from anywhere.</h2>
                <img src={signUpImage} className='sign-up-banner' alt="sign-up"/>
            </div>
            <div className="right-side">
                <div className="sign-up-box">
                    <div className="sign-up-sign-in-toggle">
                        <div className={isSignUp ? "toggler " :"toggler sign-in"}></div>
                        <p onClick={() => setIsSignUp(true)}>Sign Up</p>
                        <p onClick={() => setIsSignUp(false)}>Sign In</p>
                    </div>
                {
                    isSignUp ?
                    <div className="form-container">
                      <div className="input-container">
                        <div className="d-flex">
                            <FormInput label='First Name' value={firstName} handleChange={setFirstName}/>
                            <FormInput label='Last Name' value={lastName} handleChange={setLastName}/>
                        </div>
                            <FormInput label='email' value={email} handleChange={setEmail}/>
                            <FormInput label='password' isPassword value={password} handleChange={setPassword}/>
                        </div>
                        <div className="flex-grower"></div>
                        <div className="submit-button" onClick={handleSubmit}> 
                            {
                                isSignUp ?
                                'Let\'s Go!'
                                :
                                'Let Me In'
                            }
                        </div>
                    </div>
                    :
                    <div className="form-container">
                        <div className="input-container">
                            <FormInput label='email' value={email} handleChange={setEmail}/>
                            <FormInput label='password' isPassword value={password} handleChange={setPassword}/>
                        </div>
                        <div className="flex-grower"></div>
                        <div className="submit-button" onClick={handleSubmit}> 
                            {
                                isSignUp ?
                                'Let\'s Go!'
                                :
                                'Let Me In'
                            }
                        </div>
                    </div>
                }
                </div>
            </div>
        </SignInAndSignUpPageContainer>
    );
}

export default SignInAndSignUpPage;