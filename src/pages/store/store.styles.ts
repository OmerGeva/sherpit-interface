import styled from 'styled-components'

export const StorePageContainer = styled.div`
min-height: 80vh;
.top-banner{
    text-align: center;
    img{
        object-fit: cover;
        width: 20vw;
        height: 18vh;
    }
}
.products-container{
    margin: auto;
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
`