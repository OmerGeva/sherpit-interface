import styled from 'styled-components'

export const ProductCardContainer = styled.div`
width: 200px;
height: 300px;
position: relative;
.add-to-cart{
    cursor: pointer;
    touch-action: manipulation;
    background-color: rgb(255,255,255);
    display: flex;
    position: absolute;
    top:0;
    right: 0;
    align-items: center;
    justify-content: center;
    align-items: center;
    border: 0px;
    height: 50px;
    width: 50px;

    border-radius: 50%;
    box-shadow: rgb(0 0 0 / 16%) 0px 2px 8px;
    .plus-sign{
        font-size: 32px;
        color: #32325d;
    }
    &:hover{
        background-color: rgb(230,230,230);
    }
}
img{
    width: 100%;
}
`