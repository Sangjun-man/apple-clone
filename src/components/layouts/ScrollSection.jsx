import React, { forwardRef, useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import styled, { css } from "styled-components";

// const StyledScrollSection = styled.section`
//  padding-top : 50vh;
//  height : ${props => { console.log(props); return props.height}};

// `
// 스크롤 단위로 나눠서 높이를 지정해야 하는데 그냥 스크롤섹션 컴포넌트는 커다란 칸을 나누는거밖에 없는 듯 하다
// styled-components 써도 이벤트핸들러 사용가능 -> 실제 컴포넌트 리턴에 넣어주기 ex) onMousemove
// scrollHeight를 전체 상태값에 넣고, 리사이징 시작 / 끝 -> 상태조회 이런식으로 ?
// setHeight로 상태값 변화시키고 PRops로 받아와서 다시 스타일드 컴포넌트로 붙여넣기 하니까 계속계속 리랜더링 된다, 읻단 스타일드 컴포넌트 취소
// resize 시작->끝 이때 한번만 랜더링 하면 개좋을듯

const ScrollSection = forwardRef(
  ({ children, key = "", height, className }, ref) => {
    return (
      <section
        key={key}
        style={{
          height: height,
          position: "relative",
        }}
        className={className}
        ref={ref}
      >
        {children}
      </section>
    );
  }
);
export default ScrollSection;
