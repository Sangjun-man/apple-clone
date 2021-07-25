import React from 'react';
import styled, { css } from 'styled-components';

const StyledTitle = styled.div`

font-size:4rem;
font-weight: bold;
text-align: center;
${(props) => `
    @media ( min-width : ${props.theme.size.tabletS}){
        font-size:9vw;

    }
    `
    }

`

const StyledMainMessage = styled.div`
display: flex;
margin: 5px 0;
align-items: center;
justify-content: center;
font-size: 2.5rem;
font-weight:bold;
text-align: center;
line-height: 1.2;

${(props) => props.strong &&
    css`
    font-size:3.5rem;
    @media ( min-width : 1024px){
        font-size:9vw;

    }
    `}
${(props) => props.small && 
    css`
    margin-bottom: 0.5em;
	font-size: 1.2rem;
    `
}

@media ( min-width : ${(props)=>( props.theme.size.tabletS )}) {

    
    ${(props) => props.strong &&
        css`
        font-size:6vw;
        }
        `}
    ${(props) => props.small && 
        css`
        margin-bottom: 0.5em;
        font-size: 1.5vw;
        `


}

`


const StyledDescriptionMessage = styled.div`
max-width: 1000px;
margin: 0 auto;
padding: 0 1rem;
font-size: 1.2rem;
color: #888;


${(props) => props.strong &&
    css`
    float :left;
	margin-right: 0.2em;
	font-size: 3rem;
    font-weight:bold;
	color: rgb(29, 29, 31);
    `
}
${(props) => props.small &&
    css`
    float:none;
    width:50%;
    margin:0;
    padding:0;
    color: rgb(29, 29, 31);
    letter-spacing: -0.05em;
    font-size: 14px;
    `
}

`



const StyledMidMessage = styled.div`
padding: 0 1rem;
font-size: 2rem;
color: #888;
${(props) => props.strong &&
    css`
    font-weight:bold;
	color: rgb(29, 29, 31);
    `
}
${(props) => props.caption &&
    css`
    
	font-size: 1.2rem;
	color: #888;
    `}

    @media ( min-width : ${(props)=>( props.theme.size.tabletS )}) {

    
        ${(props) => props.strong &&
            css`
            font-size:4vw;
            }
            `}
        ${(props) => props.caption && 
            css`
            margin-bottom: 0.5em;
            font-size: 2rem
            `
    
    
    }

`

const StyledPin = styled.div`
${(props) =>
        css`
        width:${props.width};
        height:${props.height};
        background:rgb(29, 29, 31);;
        `
    
    }

`


const Title = ({ children }) => {
    return (
        <StyledTitle> {children} </StyledTitle> );
}
const MainMessage = ({ children, small, strong }) => {
    return (
        <StyledMainMessage small={small} strong={strong}> {children} </StyledMainMessage> );
}
const DescriptionMessage = ({ children, strong , small}) => {
    return (
        <StyledDescriptionMessage strong={strong} small={small}> {children} </StyledDescriptionMessage>);
}
const MidMessage = ({children , strong, caption}) => {
    
    return (
        <StyledMidMessage strong={strong} caption={caption}> {children} </StyledMidMessage>);
}
const Pin = ({width ,height}) => {
    return (<StyledPin width={width} height={height}> </StyledPin>)
}

const Reducer = ({ obj } ) => {
        switch (obj.tag) {
            case "TITLE":
                return (<Title>{obj.text} </Title>);
            case "MAIN_MSG":
                return (<MainMessage>{obj.text}</MainMessage>);case "MAIN_MSG_STRONG":
                return (<MainMessage strong>{obj.text}</MainMessage>);
            case "MAIN_MSG_SMALL":
                return (<MainMessage small>{obj.text}</MainMessage>);
            case "DESC_MSG":
                return (<DescriptionMessage>{obj.text}</DescriptionMessage>);
            case "DESC_MSG_STRONG":
                return (<DescriptionMessage strong >{obj.text}</DescriptionMessage>);
            case "DESC_MSG_SMALL":
                return (<DescriptionMessage strong small>{obj.text}</DescriptionMessage>);
            case "MID_MSG":
                return (<MidMessage>{obj.text}</MidMessage>);
            case "MID_MSG_STRONG":
                return (<MidMessage strong>{obj.text}</MidMessage>);
            case "MID_MSG_CAPTION":
                return (<MidMessage caption >{obj.text}</MidMessage>);
            case "PIN":
                return (<Pin width={obj.width} height={obj.height}> </Pin>);
            default:
                return (<div>{obj.text} </div>);
        }
};
export default Reducer;
    