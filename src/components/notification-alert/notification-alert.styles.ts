import styled from "styled-components";

export const NotificationAlertContainer = styled.div`
    z-index: 1000;
    min-width: 250px;
    height: 60px;
    position: fixed;
    top: 54px;
    right: 54px;
    box-shadow: 0 10px 50px 0 rgb(11 69 194 / 20%);
    background-color: white;
    border-radius: 12px;
    padding: 8px;
    display: flex;
    align-items: center;

    .left-bar{
        height: 100%;
        width: 4px;
        border-radius: 52px;
        background-color:  rgba(81, 195, 212, 1);
        margin-right: 8px;  
    }
    .notification-icon{
        border-radius: 50%;
        background-color: white;
        color:  rgba(81, 195, 212, 1);
        font-size: 24px;
        margin-right: 8px;  
    }
    .flex-grower{
        flex-grow:1;
    }
    .exit-icon{
        font-size: 24px;
        margin: 0 8px;
        transform: rotate(45deg);
        color: rgb(150,150,150);
        cursor: pointer;
        &:hover{
            color: rgb(50,50,50);
        }
    }


`