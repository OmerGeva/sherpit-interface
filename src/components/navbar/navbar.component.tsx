import React, { useState, useEffect } from 'react';
import { NavbarContainer } from "./navbar.styles";
import { Link } from 'react-router-dom'
// External
import { FiShoppingCart } from 'react-icons/fi';
import { IconContext } from "react-icons";

// Redux
import { useSelector } from "react-redux";


// Images
import  navbarLogo from "../../assets/logo.png";
import signUpImage from "../../assets/default-avatar.png";

// Components
import NavbarBoxMenu from "../navbar-box-menu/navbar-box-menu.component";
import { userType } from '../../redux/user/useTypes';

interface NavbarProps {
    currentUser: userType,
    setCartOpen: React.Dispatch<React.SetStateAction<boolean>>
}


const Navbar: React.FC<NavbarProps> = ({currentUser, setCartOpen}) => {
    const [profileMenuOpen, setProfileMenuOpen] = useState(false);
    const [navbarItemCount, setNavbarItemCount] = useState(0);
    const cartItems = useSelector((state: any) => state.cart.cartItems);
    
    useEffect(() => {
        if(currentUser && currentUser.user_type === 'customer'){
            setNavbarItemCount(cartItems.reduce(
                (accumalatedQuantity: any, cartItem: any) => accumalatedQuantity + cartItem.count, 0)
                
                )
            }
    }, [cartItems]);

    return (
        <NavbarContainer>
            {
                profileMenuOpen ?
                    <NavbarBoxMenu setProfileMenuOpen={setProfileMenuOpen} />
                :
                    ''
            }
            <Link to='/'>
                <img src={navbarLogo} alt="sherpit logo"/>
            </Link>
            <div className="flex-grower"></div>
            {
                currentUser ? 
                <div className='user-options'>
                        {
                            currentUser.user_type === 'customer' ?
                                <div className="cart-icon-container" onClick={() => setCartOpen(true)}>
                                    <IconContext.Provider value={{ className: "navbar-cart" }}>
                                        <FiShoppingCart />
                                    </IconContext.Provider>
                                            <div className="cart-item-counter" >
                                                {navbarItemCount}
                                            </div>
                                </div>
                            :
                                ''
                        }
                    <img src={signUpImage} alt="avatar" onClick={() => setProfileMenuOpen(!profileMenuOpen)}/>
                </div>
                :
                ''
            }
        </NavbarContainer>
    );
};

export default Navbar;