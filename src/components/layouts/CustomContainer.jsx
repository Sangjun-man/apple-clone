import React from 'react';
import styled,{css } from 'styled-components';





const StyledContainer = styled.div`
  margin-bottom:2rem;
  max-width : 1000px;
  ${(props) => {
    (props) && css`
    margin : ${props.margin};
    `}
}
`
//스타일을 아예 작성해두려니 확장성이 아쉽고, 값 받는대로 적용해두려니 굳이 컴포넌트로 만들어야 되나 싶다



const CustomContainer =({ children } ,props) => {
    return (<StyledContainer> { children }</StyledContainer>)


}
export default CustomContainer;