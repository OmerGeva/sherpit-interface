import styled from "styled-components";

export const OrderPreviewContainer = styled.div`
.dot {
    margin-left: 52px;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    margin-right: 8px;
}
.order-actions{
    display: flex;
    .mark-as-ordered{
        padding: 4px;
        margin-right: 1rem;
        width: 49%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        cursor: pointer;
        border-radius: 12px;
        box-shadow: 0px 2px 8px rgb(0 0 0 / 16%);
        .package-icon{
            color: #51C2D5;
            font-size: 26px;
        }
        p{
            color: rgb(40,40,40);
            font-weight: 600;
        }
    }
}
.pending{
    background-color: #ffcc29;
}
.confirmed{
    background-color: #81b214;
}
`