import React from 'react';
import styled, {css} from 'styled-components'

const StyledSecondNavBar = styled.div`
    display: flex;
    justify-content : space-between;
    align-items: center;
    height : 52px;
    border-bottom : 1px solid #ddd;
    max-width : 1000px;
    margin: 0 auto 0 0 ;
`
const StyledEmphasizeItem = styled.a`
    font-size: 20px;
    font-weight: bold;
    margin-right : auto; 
    `
const StyledNavItem = styled.a`
    cursor:pointer;
    margin : 0 0 0 1rem;
`








const EmphasizeItem = ({ children }) => {

    return (<StyledEmphasizeItem>
        {children}
    </StyledEmphasizeItem >)
}
const NavItem = ({ children }) => {

    return (<StyledNavItem>{ children } </StyledNavItem>)
}


const SecondNavBar = ({ emphasize, navItems }) => {

    return (
        <StyledSecondNavBar>
            <EmphasizeItem>
                {emphasize}
            </EmphasizeItem>
                {navItems.map(item => <NavItem>{item}</NavItem>)}
        
        </StyledSecondNavBar>
    );
}
export default SecondNavBar;