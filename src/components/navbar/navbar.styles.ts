import styled from "styled-components";

export const NavbarContainer = styled.div`
height: 10vh;
padding: 1.5rem;
display: flex;
img{
    margin-left: 3vw;
    width: 10vh;
}
.flex-grower{
    flex-grow: 1;
}
.user-options{
    display: flex;
    align-items: center;
    .cart-icon-container{
        margin: 0;
        cursor: pointer;
        display: flex;
        background-color: #F6F7F8;
        color: #343538;
        border-radius: 24px;
        padding: 4px 8px;
        height: 32px;
        min-width: 57px;
        font-size: 15px;
        line-height: 22px;
        font-weight: 600;
        align-items: center;
        justify-content: space-evenly;
        .cart-item-counter{

        }
        .navbar-cart{
            font-size: 18px;
            fill: rgb(52, 53, 56);
        }
        &:hover{
            background-color: rgb(230,230,230);
        }
    }
    img{
        width: 4vh;
        border-radius: 50%;
        border: 3px solid black;
        cursor: pointer;
    }
}
`