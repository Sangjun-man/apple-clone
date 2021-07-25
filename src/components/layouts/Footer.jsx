import React from 'react';
import styled, { css } from 'styled-components';

const StyledFooter = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    height : 7rem;
    background-color: blue;
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