import React, { useEffect, useRef, useState } from "react";
import styles from "./Opacity.module.css";
import { scrollParagraph } from "../data/MainParagraphHtml";
import * as op from "../style/animation/opacityAnimation";

const Opacity = (props) => {
  // const [loaded, setLoaded] = useState(false);
  const [sibal, setSibal] = useState();
  const abc = useRef();
  useEffect(() => {
    setSibal(0);
    window.addEventListener("click", op.hello);
    window.addEventListener("scroll", () => op.opacity(abc.current));
    // setLoaded(true);
  }, []);

  return (
    <>
      <div
        className={`${styles.opacity} ${styles.title}`}
        style={{ opacity: sibal }}
        ref={abc}
      >
        {scrollParagraph[0].text}
      </div>
      <div
        className={`${styles.opacity}  ${styles.message}`}
        style={{ opacity: sibal }}
      >
        {scrollParagraph[1].text.map((text) => (
          <div>{text}</div>
        ))}
      </div>
      <div className={`${styles.opacity}  ${styles.message}`}>
        {" "}
        {scrollParagraph[2].text.map((text) => (
          <div>{text}</div>
        ))}{" "}
      </div>
      <div className={`${styles.opacity}  ${styles.message}`}>
        {" "}
        {scrollParagraph[3].text.map((text) => (
          <div>{text}</div>
        ))}
      </div>
    </>
  );
};
export default Opacity;
