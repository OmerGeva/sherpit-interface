import styled from "styled-components";

export const NavbarBoxMenuContainer = styled.div`
    padding: 2rem 1rem;
    width: 312px;
    height: 343px;
    z-index: 5;
    box-shadow: 0 10px 50px 0 rgb(11 69 194 / 20%);
    background-color: white;
    border-radius: 8px;
    position: absolute;
    right: 2vw;
    top: 10vh;
    a{
        text-decoration: 0;
    }
    .sign-out{
        display: block;
        padding: 18px 8px;
        margin: 0;
        color: rgba(81, 195, 212, 1);
        font-size: 16px;
        line-height: 22px;
        font-weight: 600;
        letter-spacing: 0.025em;
        cursor: pointer;
        &:hover{
            color: #32325d;
            background-color: #F8FAFD;
            border-radius: 12px;
        }
    }
`