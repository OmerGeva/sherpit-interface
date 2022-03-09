import React, { useState } from 'react';
import { userAddressType, userType } from '../../redux/user/useTypes';
import { MiddlemanShowCardContainer } from './middleman-show-card.styles';

import signUpImage from "../../assets/default-avatar.png";

// Redux
import { useDispatch } from 'react-redux';
import { setNotfication } from '../../redux/user/user.actions'


// External
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { FiClipboard } from 'react-icons/fi';
import { IconContext } from "react-icons";
import { middlemanType } from '../../redux/cart/cartTypes';


interface MiddlemanShowCardProps {
    middleman: middlemanType
}
const MiddlemanShowCard: React.FC <MiddlemanShowCardProps> = ({middleman}) => {
    const dispatch = useDispatch();
    
    return (
        <MiddlemanShowCardContainer>
            <div className="middleman-info">
                <img src={signUpImage} alt="avatar" />
                <div>
                    <p>{middleman.name}</p>
                </div>
            </div>
            <div className="address-container">
                <div>
                    <p className='address-tag'>{middleman.address.street}</p>
                    <p className='address-tag'>{middleman.address.city}, {middleman.address.state}</p>
                    <p className='address-tag'>{middleman.address.zip}</p>
                </div>
                <CopyToClipboard text={`${middleman.address.street}, ${middleman.address.city}, ${middleman.address.state}, ${middleman.address.zip}, USA`}
                    onCopy={() => dispatch(setNotfication({message: 'Copied to clipboard!', type: 'info'}))}>
                    <span>

                    <IconContext.Provider value={{ className: "clipboard" }}>
                        <FiClipboard />
                    </IconContext.Provider>
                    </span>
                </CopyToClipboard>
            </div>
            {/* <p>{middleman.address} {middleman.last_name}</p> */}

        </MiddlemanShowCardContainer>
    );
};

export default MiddlemanShowCard;