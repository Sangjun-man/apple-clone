import React, { useEffect, useRef, useState } from "react";
import IMGArray from "../image";

const canvasStyle = {
  backgroundColor: "gainsboro",
};
const canvasContainer = {
  width: "2000px",
  height: "1000px",
};

const CanvasContainer = (props) => {
  const canvasRef = useRef();
  let { canvas, ctx, x, y, count = 0 } = {};
  const randImg = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    let random = Math.floor(Math.random() * (max - min + 1)) + min;
    return IMGArray[random];
  };

  let img = new Image();

  useEffect(() => {
    canvas = canvasRef.current;
    ctx = canvas.getContext("2d");

    canvas.addEventListener("scroll", (e) => scroll(e));
    canvas.addEventListener("mousemove", (e) => mousemove(e));
    canvas.addEventListener("click", () => ereaseRect(x, y));

    // createRect(0, 0, 200, 1000);
    // createRect(800, 0, 200, 1000);
  }, []);

  const createRect = (x = 0, y = 0, width = 100, height = 100) => {
    ctx.fillRect(x, y, width, height);
  };

  const ereaseRect = (x, y, width = 300, height = 300) => {
    // console.log("click");
    // console.log(x, y, width, height);
    ctx.clearRect(x - width / 2, y - height / 2, width, height);
  };

  const mousemove = (e) => {
    x = e.offsetX;
    y = e.offsetY;
    count = count + 1;
    if (count > 20) {
      img.src = randImg(0, 2);
      ctx.drawImage(img, x, y, 100, 100);
      count = 0;
    }
  };
  const scroll = (e) => {
    x = e.offsetX;
    y = e.offsetY;
    console.log(ctx);
    // ctx.save();
    ereaseRect(x, y, 2000, 2000);
    // ctx.restore();
    // ctx.fillRect();
    // canvasRef.current.style.translateX(e.clientX);
  };

  /* 좌우 흰색 박스 그리기
  objs.context.fillRect(
    parseInt(calcValues(values.rect1X, currentYOffset)),
    0,
    parseInt(whiteRectWidth),
    objs.canvas.height
  );
  objs.context.fillRect(
    parseInt(calcValues(values.rect2X, currentYOffset)),
    0,
    parseInt(whiteRectWidth),
    objs.canvas.height
  );
  fillRect를 위치 바꿔가면서 계속 그려주는것
  */

  return (
    <>
      <div style={canvasContainer}>
        <canvas
          id={"canvas"}
          ref={canvasRef}
          width="2000"
          height="1000"
          style={canvasStyle}
        ></canvas>
      </div>
    </>
  );
};

export default CanvasContainer;
