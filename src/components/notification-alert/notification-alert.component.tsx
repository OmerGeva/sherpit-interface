import React from 'react';
import { NotificationAlertContainer } from './notification-alert.styles';

// Redux
import { useDispatch, useSelector } from 'react-redux';

// External
import { MdInfo } from 'react-icons/md';
import { CgMathPlus } from 'react-icons/cg';

import { IconContext } from "react-icons";
import { setNotfication } from '../../redux/user/user.actions';

const NotificationAlert = () => {
    const notificationAlert = useSelector((state: any) => state.user.notification);
    const dispatch = useDispatch();

    // setTimeout(() => {
    //     dispatch(
    //         setNotfication({message: '', type: 'info'})
    //         )
    // }, 15000)
    return (
        notificationAlert.message ?
            <NotificationAlertContainer>
                <div className="left-bar"></div>
                <IconContext.Provider value={{ className: "notification-icon" }}>
                    <MdInfo />
                </IconContext.Provider>
                {
                    notificationAlert.message
                }
                <div className="flex-grower"></div>
                <div onClick={() => dispatch(
                        setNotfication({message: '', type: 'info'})
                        )}>
                    <IconContext.Provider value={{ className: "exit-icon" }}>
                        <CgMathPlus />
                    </IconContext.Provider>
                </div>
            </NotificationAlertContainer>
            :
            <div></div>
    );
};

export default NotificationAlert;

