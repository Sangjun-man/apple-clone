import React from 'react';
import styled,{ css } from "styled-components"


const StyledPageViewContainer = styled.div`
    max-width : 100vw;
    


`



const PageViewContainer = ({children }) => {



return (
    <StyledPageViewContainer>
            {children}
    </StyledPageViewContainer>
);
}
export default PageViewContainer;