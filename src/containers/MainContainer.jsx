import React, { useEffect } from "react";
import {
  navItems,
  secondNavItems,
  scrollParagraph,
  scrollParagraph2,
  scrollParagraph3,
  scrollParagraph4,
} from "../data/MainParagraph";
//data에 해당하는 부분
import PageViewContainer from "../components/layouts/PageViewContainer";
import MainNavBar from "../components/layouts/MainNavBar";
import SecondNavBar from "../components/layouts/SecondNavBar";
import ScrollSection from "../components/layouts/ScrollSection";
import Footer from "../components/layouts/Footer";
import CustomContainer from "../components/layouts/CustomContainer";
import Reducer from "../components/features/Reducer";
// index.js 로 레이아웃 다 가져오기???
import { useSelector } from "react-redux";
import playAnimation from "../style/animation/animation";

const MainContainer = (props) => {
  const { sectionHeight, currentScene, sceneInfo } = useSelector(
    (store) => store.size
  );

  useEffect(() => {
    playAnimation(currentScene);
  }, [currentScene]);

  return (
    <>
      <PageViewContainer>
        <CustomContainer>
          <CustomContainer absolute>
            <MainNavBar navItems={navItems} />
            <SecondNavBar
              emphasize={"AirMug Pro"}
              navItems={secondNavItems}
            ></SecondNavBar>
          </CustomContainer>
          <ScrollSection height={sectionHeight}>
            {scrollParagraph.map((data) => {
              return (
                <CustomContainer padding={"0 5px 3em 5px;"}>
                  {data.map((obj) => {
                    return <Reducer obj={obj}> </Reducer>;
                  })}
                </CustomContainer>
              );
            })}
          </ScrollSection>
          <ScrollSection height={sceneInfo[1].scrollHeight}>
            {scrollParagraph2.map((data) => {
              return (
                <CustomContainer padding={"0 0 3em 0;"}>
                  {data.map((obj) => {
                    return <Reducer obj={obj}> </Reducer>;
                  })}
                </CustomContainer>
              );
            })}
          </ScrollSection>
          <ScrollSection height={sectionHeight}>
            {scrollParagraph3.map((data) => {
              return (
                <CustomContainer padding={"0 0 3em 0;"}>
                  {data.map((obj) => {
                    return <Reducer obj={obj}> </Reducer>;
                  })}
                </CustomContainer>
              );
            })}
          </ScrollSection>
          <ScrollSection height={sectionHeight}>
            {scrollParagraph4.map((data) => {
              return (
                <CustomContainer padding={"0 0 3em 0;"}>
                  {data.map((obj) => {
                    return <Reducer obj={obj}> </Reducer>;
                  })}
                </CustomContainer>
              );
            })}
          </ScrollSection>
        </CustomContainer>
      </PageViewContainer>
      <Footer />
    </>
  );
};
export default MainContainer;

// App.js로 이동
//   const { scrolloffsetY } = useSelector((store) => store.scroll);

//   const onResize = () => {
//     // 초기 scene들의 Height값 정해주는 함수
//     let heightNum = 5;
//     let deviceHeight = window.innerHeight;
//     let height = heightNum * deviceHeight;
//     dispatch(setSectionHeight(height));
//     for (let i = 0; i < 4; i++) {
//       if (i === 1) {
//         dispatch(
//           setSceneHeight({
//             sceneNum: i,
//             type: "normal",
//             scrollHeight: deviceHeight,
//           })
//         );
//       } else {
//         dispatch(
//           setSceneHeight({ sceneNum: i, type: "sticky", scrollHeight: height })
//         );
//       }
//     }
//   };

//   const onScroll = () => {
//     let OffsetY = window.pageYOffset;
//     dispatch(setScrollOffsetY(OffsetY));
//   };

//   //메인페이지 마운트 시에 함수실행할것들
//   useEffect(() => {
//     onResize();
//     window.addEventListener("resize", onResize);
//     window.addEventListener("scroll", onScroll);
//     // window.scrollTo(10000);
//     //addEventListener는 선언될때 함수를 따로 저장해두는 듯 하다,
//   }, []);

//   useEffect(() => {
//     //currentScene 설정
//     let OffsetY = window.pageYOffset;
//     let prevScrollHeight = 0;
//     for (let i = 0; i < currentScene; i++) {
//       prevScrollHeight += sceneInfo[i].scrollHeight;
//     }
//     if (OffsetY > prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
//       dispatch(setCurrentScene(currentScene + 1));
//     }
//     if (OffsetY < prevScrollHeight) {
//       dispatch(setCurrentScene(currentScene - 1));
//     }
//     // console.log(currentScene);
//     console.log(scrolloffsetY);
//     console.log(currentScene);
//     playAnimation(currentScene);
//   }, [scrolloffsetY]);

//치열한 흔적,,
// const scrollRef0 = useRef(null);
// const scrollRef1 = useRef(null);
// const scrollRef2 = useRef(null);
// const scrollRef3 = useRef(null);
// const dispatch = useDispatch();
// const { height, currentScene } = useSelector(state => state.scroll)
// let currentHeight, currentWidth;
// useEffect(() => {
//     currentHeight = window.innerHeight
//     window.addEventListener('resize', () => { currentHeight = window.innerHeight})
//     dispatch(setHeight(5 * currentHeight))
//     console.log(currentHeight)
// },[currentHeight,currentWidth])
