import React from "react";
import FloatingCanvas from "./FloatingCanvas";

const containerss = {
  width: "1000px",
  height: "1000px",
  margin: "auto",
  display: "absolute",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  border: "1px solid",
};

const Floating = (props) => {
  return (
    <>
      <div style={containerss}>
        <FloatingCanvas />
      </div>
    </>
  );
};

export default Floating;
