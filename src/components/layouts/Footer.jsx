import React from 'react';
import styled, { css } from 'styled-components';

const StyledFooter = styled.div`
    height : 2rem;
    background-color: blue;
    text-align: center;
    color:white;

`


const Footer = ({children}) => {



return (
    <StyledFooter>
        Footer
    </StyledFooter>
);
}
export default Footer;