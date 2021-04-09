import styled from "styled-components";

export const StoreCardContainer = styled.div`
    a{
        color: black;
        text-decoration: none;
        width: 479px;
        height: 92px;
        display: flex;
        border-radius: 12px;
        box-shadow: 0px 2px 8px rgb(0 0 0 / 16%);
        flex-direction: row;
        font-weight: bold;
        text-align: left;
        padding: 8px;
        margin-top: 24px;
        img{
            width: 25%;
        }
        .info-container{
            margin-left: 24px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .store-title{
                font-size: 18px;
                line-height: 26px;
                font-weight: 600;
                white-space: pre-wrap;
                display: block;
            }
            .store-description{
                color: #343538;
                font-size: 12px;
                line-height: 18px;
                font-weight: 600;
            }
        }
    }
`