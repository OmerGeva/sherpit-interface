import React from 'react';
import { FourOhFourPageContainer } from "./404.styles";
import { Link } from 'react-router-dom'

const FourOhFourPage = () => {
    return (
        <FourOhFourPageContainer>
            You're drunk, go <Link to='/'>home</Link>.
        </FourOhFourPageContainer>
    );
};

export default FourOhFourPage;