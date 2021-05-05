import styled from 'styled-components'

interface ModalContainerProps {
    typeOfModal: 'MIDDLEMAN-ORDER-INFO' | 'ORDER-ACTIONS' | 'VIEW-IMAGE' | 'MARK-AS-SENT'
  } 


export const CustomModalContainer = styled.div<ModalContainerProps>`
    position: absolute;
    top: ${props => props.typeOfModal === 'MIDDLEMAN-ORDER-INFO' ? '0' : '10vh'};
    left: calc(50% - 20vw);
    width: calc(40vw + 120px);
    background-color: white;
    box-shadow: 0 10px 50px 0 rgb(11 69 194 / 20%);
    min-height: 40vh;
    border-radius: 8px;
    transition: .3s;
    h2{
        text-align: center;
    }
    z-index: 16;

    .order-receipt{
        text-align: center;
        img{
            width: 80%;
            padding: 2rem;
            box-shadow: 0 6px 12px -2px rgb(50 50 93 / 25%), 0 3px 7px -3px rgb(0 0 0 / 30%);
            margin-bottom: 2rem;
        }
    }

.see-more-info{
    display: block;
    .order-item-show{
        padding: 3rem;
        .order-information{
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid rgba(0,0,0,0.2);
            img{
                width: 10%;
            }
            
        }
        .items-title{
            font-size: 22px;
         }
        .show-item-orders{
            
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 16px;
            img{
                width: 10%;
            }
        }
    }
}
.user-actions{
    .upload-box{
        background-color: rgba(81, 194, 213, 0.4);
        border: 3px dashed #51C2D5;
        border-radius: 12px;
        width: 80%;
        height: 200px;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        .file-upload-input {
            position: absolute;
            margin: 0;
            padding: 0;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            outline: none;
            opacity: 0;
            cursor: pointer;
          }
          
          img{
              max-width: 100%;
              height: 100%;
          }
        }
        .order-info{
            width: 80%;
            margin: auto;
            display: flex;
            justify-content: space-around;
            padding: 2rem .5rem;
            .individual-input{
                width: 40%%;
                .label-for-input{
                    text-align: center;
                }
                .order-confirmation-input{
                    border: .2px solid rgba(0,0,0,0.3);
                    width: 100%;
                    height: 24px;
                    border-radius: 8px;
                    font-size: 20px;
                    padding: 8px;
                    }
                }
                input{
                    &:focus{
                        outline: none;
                       
                    }
                }
                .react-date-picker__wrapper{
                    border-radius: 8px;
                    padding: 8px;
                }
            }
        }
        .mark-as-ordered-button{
            cursor: pointer;
            width: 80%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 24px auto;
            height: 48px;
            border-radius: 8px;
            background-color: #51C2D5;
            font-weight: 600;
            font-size: 18px;
            color: white;
            }
            .disabled{
                cursor: default;
                opacity: 0.3;
            }
}
`