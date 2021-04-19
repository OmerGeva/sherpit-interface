import React, { useRef } from 'react';
import { NavbarBoxMenuContainer } from "./navbar-box-menu.styles";
import { Link } from "react-router-dom";

//Redux
import { useDispatch } from "react-redux";
import { setCurrentUser } from '../../redux/user/user.actions'
import { setCart } from '../../redux/cart/cart.actions'

// Effects
import { useOnClickOutside } from '../../effects/use-on-click-outside'

interface NavbarBoxProps {
    setProfileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const NavbarBoxMenu: React.FC <NavbarBoxProps> = ({setProfileMenuOpen}) => {
    const dispatch = useDispatch();
    const ref = useRef<HTMLDivElement>(null);

    useOnClickOutside(ref, () => setProfileMenuOpen(false));


    return (
        <NavbarBoxMenuContainer ref={ref}>
            <Link to='/orders' onClick={() => setProfileMenuOpen(false)}>
                <div className="sign-out" >
                    My Orders
                </div>
            </Link>
            <div className="sign-out" onClick={() => {dispatch(setCurrentUser(null)); 
                                                                dispatch(setCart([])); 
                                                                setProfileMenuOpen(false);}}>
            Sign Out</div>
        </NavbarBoxMenuContainer>
    );
};

export default NavbarBoxMenu;