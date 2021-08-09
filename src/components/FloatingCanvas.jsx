import React, { forwardRef, useEffect, useRef } from "react";

const yesyes = {
  //   position: "absolute",
  //   top: "50%",
  //   left: "50%",
  width: "500px",
  height: "500px",
  border: "1px solid black",
};

const FloatingCanvas = forwardRef(({ upperRef }, forwardRef) => {
  const cutRef = useRef();
  const event = () => {};
  const onResize = (e) => {
    console.log(e);
  };

  useEffect(() => {
    let scroll = window.pageYOffset;
    console.log(cutRef.current);
    //   upperRef.current.addEventListener{""}
    // cutRef.current.addEventListener("mouseover", onResize, false);
    // cutRef.current.addEventListener("mousemove", () => console.log(forwardRef));
  }, []);

  return (
    <>
      <canvas style={yesyes} ref={cutRef}></canvas>
    </>
  );
});
export default FloatingCanvas;
