import styled from 'styled-components'

export const SearchBarContainer = styled.div`
.whole-container{

    display: flex;
    width: 40vw;
    border-radius: 5px;
    margin: auto;
    margin-bottom: 10vh;
    box-shadow: rgb(0 0 0 / 16%) 0px 0px 0px 1px;

    .search{
        border: 1px solid transparent;
        border-radius: 5px 0px 0px 5px;
        flex-grow: 1;
        margin-bottom: 0px;
        font-size: 18px;
        background-color: rgb(247, 247, 247);
        appearance: none;
        line-height: normal;
        color: #343538;
        padding-left: 12px;
        &:focus {
            outline: none;
        }
        
    }
    .search-form-button{
        position: relative;
        cursor: pointer;
        border: 1px solid transparent;
        border-radius: 0px 5px 5px 0px;
        font-weight: 600;
        align-items: center;
        padding-left: 16px;
        padding-right: 16px;
        font-size: 16px;
        height: 36px;
        background-color: rgb(79, 195, 212);
        color: rgb(255, 255, 255);
        width: 28px;
        display: flex;
        justify-content: center;
        align-items: center;
        .magnify-glass{
            font-size: 32px;
        }
        &:hover{
            background-color: rgb(72, 186, 201);
        }
    }
}
    
    `