import React from 'react';
import  styled,{ css } from 'styled-components';



const StyledNavItem = styled.a`
    cursor:pointer;
`


const StyledMainNavbar = styled.div`
    display: flex;
    justify-content : space-between;
    align-items: center;
    height : 44px;
    max-width : 1000px;
    margin: 0 auto;
`


const NavItem= ({children }) => {

    return (
        <StyledNavItem>{children}</StyledNavItem>)
}









const MainNavBar = ({navItems}) => {


    return (
        <StyledMainNavbar>
            {navItems.map(item => <NavItem>{item}</NavItem>) }
        </ StyledMainNavbar>
    );
}
export default MainNavBar;