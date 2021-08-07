import React from "react";
import styled, { css } from "styled-components";

const StyledPageViewContainer = styled.div`
  max-width: 100vw;
  //   max-width: 1000px;
`;

const PageViewContainer = ({ children }) => {
  return <StyledPageViewContainer>{children}</StyledPageViewContainer>;
};
export default PageViewContainer;
