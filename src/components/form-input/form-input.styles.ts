import styled, { css } from "styled-components";

const shrinkStyles = css`
    top: -8px;
    font-size: 12px;
    
`


export const FormInputContainer = styled.div`
    position:relative;
    margin-bottom: 2rem;
    input{
        height: 35px;
        color: rgb(47, 57, 78);
        width: 100%;
        z-index: 1;
        font-size: 18px;

        border: none;
        transition: 300ms ease all;
        border-bottom: 1px solid rgba(0,0,0,0.2);
        &:focus{
            outline: none;
            border-bottom: 1px solid rgba(81, 195, 212, 1);
        }
        &:focus ~ .label {
            ${shrinkStyles}
        }
    }
    input[type='password'] {
        letter-spacing: 0.3em;
      }
    .label{
        padding: 0px;
        margin: 0px;
        border: 0px;
        position: absolute;
        color: rgba(47, 57, 78, 0.6);
        font-size: 13px;
        font-weight: 600;
        cursor: text;
        pointer-events: none;
        
        text-transform: capitalize;
        transition: 400ms ease all;
        position: absolute;
        font-size: 16px;
        pointer-events: none;
        left: 0px;
        top: 10px;
        &.shrink {
            ${shrinkStyles}
          }
    }
`