import React from 'react';
import { NotificationAlertContainer } from './notification-alert.styles';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { setNotfication } from '../../redux/user/user.actions';

// External
import { CgMathPlus } from 'react-icons/cg';
import { MdInfo } from 'react-icons/md';
import { IconContext } from "react-icons";


const NotificationAlert: React.FC = () => {
    const notificationAlert: {
        message: string,
        type: string
      } = useSelector((state: any) => state.user.notification);

    const dispatch = useDispatch();
    if(notificationAlert.message.length !== 0){
        setTimeout(() => {
            dispatch(
                setNotfication({message: '', type: 'info'})
                )
            }, 10000)
        }
    return (
            <NotificationAlertContainer active={notificationAlert.message.length !== 0}>
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
    );
};

export default NotificationAlert;

