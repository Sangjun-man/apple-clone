import React from 'react';
import styled, { css } from 'styled-components';

const StyledTitle = styled.div`
font-size:4rem;
font-weight: bold;
text-align: center;
`

const StyledMainMessage = styled.div`
display: flex;
margin: 5px 0;
align-items: center;
justify-content: center;
font-size: 2.5rem;
${(props) => props.small && 
    css`
    font-size: 1.2rem;
    `
}
`


const StyledDescriptionMessage = styled.div`
font-size: 1.2rem;
color: #888;
text-align:center;
${(props) => props.strong &&
    css`
    font-size: 3rem;
	color: rgb(29, 29, 31);
    `
}
`



const StyledMidMessage = styled.div`
font-size: 2rem;
text-align: center;
color: #888;
${(props) => props.strong &&
    css`
	color: rgb(29, 29, 31);
    `
}
${(props) => props.caption &&
    css`
    padding: 0 1rem;
	font-size: 1.2rem;
	color: #888;
    `}
`



const Title = ({ children }) => {
    return (
        <StyledTitle> {children} </StyledTitle> );
}
const MainMessage = ({ children, small }) => {
    return (
        <StyledMainMessage small={small}> {children} </StyledMainMessage> );
}
const DescriptionMessage = ({ children, strong }) => {
    return (
        <StyledDescriptionMessage strong={strong}> {children} </StyledDescriptionMessage>);
}
const MidMessage = ({children , strong, caption}) => {
    
    return (
        <StyledMidMessage strong={strong} caption={caption}> {children} </StyledMidMessage>);
}


const Reducer = ({ obj } ) => {
        switch (obj.tag) {
            case "TITLE":
                return (<Title>{obj.text} </Title>);
            case "MAIN_MSG":
                return (<MainMessage>{obj.text}</MainMessage>);
            case "MAIN_MSG_SMALL":
                return (<MainMessage small>{obj.text}</MainMessage>);
            case "DESC_MSG":
                return (<DescriptionMessage>{obj.text}</DescriptionMessage>);
            case "DESC_MSG_STRONG":
                return (<DescriptionMessage strong >{obj.text}</DescriptionMessage>);
            case "MID_MSG":
                return (<MidMessage>{obj.text}</MidMessage>);
            case "MID_MSG_STRONG":
                return (<MidMessage strong>{obj.text}</MidMessage>);
            case "MID_MSG_CAPTION":
                return (<MidMessage caption >{obj.text}</MidMessage>);
        
            default:
                return (<div>{obj.text} </div>);
        }
};
export default Reducer;
    