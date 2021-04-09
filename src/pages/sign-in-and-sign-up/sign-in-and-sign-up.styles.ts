import styled, { css } from 'styled-components';

const centerItems = css`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`



export const SignInAndSignUpPageContainer = styled.div`
    display: flex;
    height: 80vh;
    .left-side{
        width: 60%;
        ${centerItems}

        h2{
            color: rgb(47, 57, 78);
            font-size: 36px;
            font-weight: bold;
            margin-bottom: 2.5rem;
        }
        .sign-up-banner{    
            width: 40vw;
            margin-bottom: 15vh;
        }
    }
    .right-side{
        width: 40%;
        ${centerItems}

        .sign-up-box{

            width: 80%;
            min-height: 60vh;
            margin-right: 5vw;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 10px 50px 0 rgb(11 69 194 / 20%);
            margin-bottom: 10vh;
            padding: 80px 7% 25px;
            .sign-up-sign-in-toggle{
                position: relative;
                width: 210px;
                height: 45px;

                display: flex;
                align-items: center;
                justify-content: space-between;
                background-color: rgba(130, 217, 229, 0.9);
                border-radius: 2em;

                p{
                    ${centerItems}
                    color: #F3F6F7;
                    width: 50%;
                    height: 100%;
                    cursor: pointer;
                    z-index: 3;
                }
                .toggler{
                    position: absolute;
                    left: 2%;
                    top: 4%;
                    width: 48%;
                    height: 90%;
                    background-color: rgba(81, 195, 212, 0.7);
                    border-radius: 2em;
                    transition: .5s;
                }                
                .sign-in{
                    left: 50%;
                }

            }
            
            .form-container{
                ${centerItems}
                margin-top: 20%;
                .input-container{
                    width: 80%;
                }
                .d-flex{
                    display: flex;
                    justify-content: space-between;
                }
                
                .submit-button{
                    ${centerItems}
                    width: 80%;
                    color: white;
                    font-size: 16px;
                    font-weight: 600;
                    height: 56px;
                    background-color: rgba(81, 195, 212, 1);
                    border-radius: 8px;
                    margin: auto;
                    margin-top: 45px;
                    cursor: pointer;

                }
            }

        }
    }
`

