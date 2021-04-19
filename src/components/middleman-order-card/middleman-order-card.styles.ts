import styled from 'styled-components'

export const MiddlemanOrderCardContainer = styled.div`
    width: 330px;
    height: 170px;
    border: 1px solid rgba(0,0,0,0.4);
    margin: 16px;
    .order-info{
        width: 100%;
        height: calc(65% - 16px);
        display: flex;
        color: black;
        padding: 8px;
        img{
            width: 30%;
            margin-right: 24px;
        }

    }
    .order-actions{
        display: flex;
        height: 35%;
        .accept{
            display: flex;
            align-items: center;
            justify-content: center;
            text-transform: uppercase;
            cursor: pointer;
            width: 50%;
            background-color: rgba(6,214,160,0.2);
            color:  rgb(6,214,160);
            &:hover{
                background-color: rgba(6,214,160,0.3);
            }
        }
        .decline{
            display: flex;
            align-items: center;
            justify-content: center;
            text-transform: uppercase;
            cursor: pointer;
            width: 50%;
            background-color: rgba(255,104,107,0.2);
            color:  rgb(255,104,107);
            &:hover{
                background-color: rgba(255,104,107,0.3);
            }
        }
    }
    .mark-as-delivered{
        height: 35%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-transform: uppercase;
        cursor: pointer;
        background-color: rgba(40,40,40,0.2);
        color:  rgb(40,40,40);
    }
`