import React from 'react';
import styled,{ css } from "styled-components"


const StyledPageViewContainer = styled.div`
    max-width : 100vw;
    display:flex;
    justify-content:center;


`
const StyledPageContents = styled.div`
    max-width : 1000px;
`



const PageViewContainer = ({children }) => {



return (
    <StyledPageViewContainer>
        <StyledPageContents>
            {children}
        </StyledPageContents>
    </StyledPageViewContainer>
);
}
export default PageViewContainer;