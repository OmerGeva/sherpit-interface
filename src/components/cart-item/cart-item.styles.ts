import styled from "styled-components";

export const CartItemContainer = styled.div`
display: flex;
padding: 5%;
align-items: center;
justify-content: space-between;
border-bottom: .1px solid rgba(0,0,0,0.3);
position: relative;
img{
    width: 20%;
    margin-right: 16px;
}
.product-title{
    width: 40%;
    text-align: left;
    margin-right: 32px;

}
.product-count{
    .item-count{
        padding: 16px;
    }
    border: 2px solid #C4C4C4;
    border-radius: 8px;
    font-weight: 600;
    color: rgba(50,50,50, 0.8);
    cursor: pointer;
    transition: 0.3s;

    &:hover{
        background-color: #e8e8e8;
    }
}
.change-count-open{
    border: 0;
    box-shadow: rgba(117,117,117) 0px 0px 10px;
    position: absolute;
    z-index: 2;
    right: 15%;
    background-color: white;
    width: 120px;
    transition: 0.3s;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .count-icon-container{
        cursor: pointer;
        padding: 16px 4px;
        height: 100%;
        width: 33%;
        .count-icon{
            color: rgb(79,195,212);
            font-size: 24px;
            font-weight: 600;
            
        }
        &:hover{
            background-color:  #e8e8e8;
        }
    }
    .minus{
        border-radius: 8px 0 0 8px;
    }
    .plus{
        border-radius: 0 8px 8px 0 ;

    }

    &:hover{
        background-color:  white;
        cursor: default;
    }
}
.flex-grower{
    flex-grow: 1;
}
.product-total{
    width: 30%
    font-size: 18px;
    font-weight: 600;
}
.count-open{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    z-index: 1;
    background-color: rgba(255,255, 255,0.7);
    transition: .3s;
}
`