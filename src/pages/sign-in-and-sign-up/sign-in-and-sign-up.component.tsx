import React, { useState, SyntheticEvent } from 'react';
import { useDispatch } from "react-redux";

import { setCurrentUser, setNotfication } from '../../redux/user/user.actions'
import { setCart, setCartInfo } from '../../redux/cart/cart.actions'

import { SignInAndSignUpPageContainer } from "./sign-in-and-sign-up.styles";
import signUpImage from "../../assets/drawkit-transport-scene-11.svg";
import FormInput from "../../components/form-input/form-input.component";

// API
import { authenticate } from "../../api/axios";

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
          // console.log(response.data);
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
          dispatch(
            setNotfication({message: `Welcome back!`, type: 'info'})
            )
        }
      }

    const handleSubmit = async (event: SyntheticEvent) => {
        event.preventDefault();
            
        try{
    
         const response = await authenticate(email.toLowerCase(), password);

         await handleLogIn(response);
        }catch(error){
          dispatch(
            setNotfication({message: error.message, type: 'info'})
            )
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