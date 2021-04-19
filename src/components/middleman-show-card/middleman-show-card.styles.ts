import styled from "styled-components";

export const MiddlemanShowCardContainer = styled.div`
border-top: 1px solid rgba(0,0,0,0.3);
padding-top: 12px;
.middleman-info{
    display: flex;
    align-items: center;
    img{
        width: 4vh;
        border-radius: 50%;
        border: 3px solid black;
        width: 15%;
        height: 15%;
        padding: 4px;
        margin-right: 12px;
    }
    margin-bottom: 8px;
}
.address-container{
    display: flex;
    justify-content: space-between;
    align-items: center;

    .address-tag{
        margin: 2px;
    }
    .clipboard{
        font-size: 32px;
        cursor: pointer;
        color: black;
        &:hover{
            color: rgb(70,70,70);
        }
    }
}

`