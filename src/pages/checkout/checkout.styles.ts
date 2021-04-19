import styled from 'styled-components'

export const CheckoutPageContainer = styled.div`
min-height: 80vh;
background-color: rgba(221, 221, 221,0.45);
display: flex;
justify-content: space-around;
    .stores-side{
        padding: 32px;
        .store-type-title{
            font-size: 32px;
            width: 150px;
            padding-bottom: 16px;
            border-bottom: 1px solid rgba(0,0,0,0.2);
        }
        margin: 16px;
        width: 65vw;
        height: 80vh;
        
        background-color: white;
        .stores-container{
            .checkout-store-card{
                padding: 16px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                img{
                    width: 20%;
                    margin-right: 24px;
                }
                p{
                    text-transform: uppercase;
                    font-size: 18px;
                    font-weight: 800;
                    color: #676767;
                    .total-item-count{
                        text-transform: none;
                        margin-left: 4px;
                        color: rgba(0,0,0,0.8);
                    }
                }
            }
        }
    }
    .payment-side{
        padding: 32px;
        margin: 16px;
        width: 23vw;
        height: 80vh;
        background-color: white;
        .complete-checkout-button{
            cursor: pointer;
            width: 95%;
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
        .totals-count{
            border-top: 1px solid rgba(0,0,0,0.4);
            margin: 32px auto;
            width: 94%;
            font-size: 18px;
            .price-text{
                padding: 12px;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .shipping-container{
                border-top: 1px solid rgba(0,0,0,0.4);
                border-bottom: 1px solid rgba(0,0,0,0.4);
                text-align: center;
                cursor: pointer;
                padding-bottom: 24px;
                .shipping-types{
                    display: flex;
                    justify-content: space-between;
                    .shipping-type{
                        width: 40%;
                        padding: 8px;
                        .shipping-title{
                            font-size: 16px;
                        }
                        .shipping-price{
                            font-size: 14px;
                            
                        }

                    }
                    .selected-shipping{
                        border: 1px solid rgb(0,0,0);
                        border-radius: 8px;
                    }
                }
            }
        }
}

`