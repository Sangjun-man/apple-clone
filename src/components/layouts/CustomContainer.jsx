import React from "react";
import styled, { css } from "styled-components";

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  box-sizing: border-box;
  ${(props) =>
    props.padding &&
    css`
      padding: ${props.padding};
    `}
  ${(props) =>
    props.absolute &&
    css`
      position: absolute;
      top: 0;
      width: 100%;
    `};
`;
//스타일을 아예 작성해두려니 확장성이 아쉽고, 값 받는대로 적용해두려니 굳이 컴포넌트로 만들어야 되나 싶다
//전체 페이지 컨테이너안에 1000px로 고정해두는 컨테이너로 설정
// fixed와 absolute의 차이?????

const CustomContainer = ({ children, absolute, padding }, props) => {
  return (
    <StyledContainer absolute={absolute} padding={padding}>
      {children}
    </StyledContainer>
  );
};
export default CustomContainer;
