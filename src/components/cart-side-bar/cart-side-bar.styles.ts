import styled from "styled-components";

export const CartSideBarContainer = styled.div`
.side-bar-container{
    position: absolute;
    width: 520px;
    height: 100vh;
    z-index: 20;
    top: 0;
    right: -520px;
    background-color: white;
    visibility: visible;
    transform: translateX(0px);
    transition: .3s;

    text-align: center;
    .close-sidebar-button{
        cursor: pointer;
        position: absolute;
        right: 16px;
        top: 16px;
        border-radius: 8px;
        background-color: rgb(79,195,212);
        color: white;
        padding: .5rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .exit-x{
            font-size: 24px;
            margin-right: 8px;
            transform: rotate(45deg);
        }

    }
    .heading-container{
        width: 100%;
        height: 10vh;
        h2{
            margin: 32px auto;
            
            font-weight: 600;
        }
    }
    .cart-store-container{
        padding: 16px 24px 0px;
        border-top: 1px solid rgba(0,0,0,1);
        .top-info{
            display: flex;
            align-items: center;
            img{
                width: 25%;
                margin-right: 24px;
            }
            .flex-grower{
                flex-grow: 1;
            }
            p{
                font-size: 22px;
                font-weight: 600;
            }
        }
    }
    .review-cart-button{
        cursor: pointer;
        width: 95%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 24px auto;
        height: 48px;
        border-radius: 8px;
        background-color: rgb(79,195,212);
        font-weight: 600;
        font-size: 18px;
        color: white;
    }
}
.open{
    right: 0;
}

    `