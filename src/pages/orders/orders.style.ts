import styled from "styled-components";

export const OrdersPageContainer = styled.div`
height: 70vh;
display: flex;
padding: 3vw;
overflow: hidden;
.all-orders{
    margin-left: 5vw;
    width: 60vw;
    padding-right: 54px;
    border-right: 1px solid rgba(0,0,0,0.1);
    table{
        border-collapse: collapse;
        margin: 25px 0;
        font-size: 0.9em;
        font-family: sans-serif;
        width: 100%;
    }
    thead tr{
        height: 64px;
        font-size: 18px;
        text-align: left;
        border-bottom: 2px solid rgba(10,10,10,0.1);
        th{
            padding: 12px;
            width: 25%;
            font-weight: 800;
            color: #676767;
        }
    }
    .selected-row{
        background-color: rgba(81,195,212,0.1);
    }
    tbody tr:last-of-type {
    }
    
    tbody tr{
        font-size: 18px;
        height: px;
        &:hover{
            cursor: pointer;
            background-color: rgba(81,195,212,0.1);
        }
    }
    td{
        padding: 12px 15px;
    }
}
.chosen-order{
    overflow: scroll;
    ::-webkit-scrollbar {
        display: none;
      }
    padding: 24px;
    width: 25vw;
    .order-info-title{
            display: flex;
            align-items: center;
        h2{

        }
        .dot {
            margin-left: 52px;
            height: 15px;
            width: 15px;
            border-radius: 50%;
            margin-right: 8px;
        }
        .pending{
            background-color: #ffcc29;
        }
        .confirmed{
            background-color: #81b214;
        }
        p{
            font-size: 
        }
    }
    .order-item-show{
        .order-information{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-right: 20%;
            img{
                width: 30%;
            }
        }
        .show-item-orders{
            display: flex;
            align-items: center;
            justify-content: space-between;
            img{
                width: 20%;
            }
            p{
                margin-left: 4px;
                width: 30%;
            }
        }
    }
}
`

