import React from "react";
import styled from "styled-components";

const StyledCanvas = styled.canvas`
  ${(props) => console.log(props)}
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: 3px solid black;
  box-sizing: border-box;
  background-color: ${(props) => props.color};
`;

const Canvas = (props, { children, width, height, ref }) => {
  return (
    <StyledCanvas width={width} height={height} ref={ref} {...props}>
      {children}
    </StyledCanvas>
  );
};
export default Canvas;
