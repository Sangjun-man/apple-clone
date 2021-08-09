import MainPage from "./pages/MainPage";
import { ThemeProvider } from "styled-components";
import theme from "./style/theme";
import { useDispatch, useSelector, useStore } from "react-redux";
import { setScrollOffsetY } from "./modules/scroll";
import {
  setCurrentScene,
  setSceneHeight,
  setSectionHeight,
} from "./modules/size";
import { useEffect } from "react";
import playAnimation from "./style/animation/animation";
import { isCompositeComponentWithType } from "react-dom/test-utils";

export const appValue = {
  scrolloffsetY: 0,
  prevScrollHeight: 0,
};
//redux 디스패치하고 값받아오고 하는데 너무오래걸리니깐 App내에서만 쓰는 밸류로

const App = (props) => {
  const dispatch = useDispatch();
  // let { scrolloffsetY, prevScrollHeight } = appValue;
  //참조값으로 받기 가능?
  const { currentScene, sceneInfo } = useSelector((store) => store.size);
  const { scrolloffsetY } = useSelector((store) => store.scroll);
  // const store = useStore();

  useEffect(() => {
    onResize();
    // onScroll();

    window.addEventListener("resize", onResize);
    // window.addEventListener("scroll", onScroll);
    //addEventListener는 선언될때 함수를 따로 저장해두는 듯 하다,
  }, []);

  const onResize = () => {
    // 초기 scene들의 Height값 정해주는 함수
    let heightNum = 5;
    let deviceHeight = window.innerHeight;
    let height = heightNum * deviceHeight;
    dispatch(setSectionHeight(height));
    for (let i = 0; i < 4; i++) {
      if (i === 1) {
        dispatch(
          setSceneHeight({
            sceneNum: i,
            type: "normal",
            scrollHeight: deviceHeight,
          })
        );
      } else {
        dispatch(
          setSceneHeight({ sceneNum: i, type: "sticky", scrollHeight: height })
        );
      }
    }
  };

  const onCheckCurrentScene = () => {
    let prevScrollHeight = 0;
    for (let i = 0; i < sceneInfo.length; i++) {
      prevScrollHeight += sceneInfo[i].scrollHeight;
      if (prevScrollHeight > scrolloffsetY) {
        if (i !== currentScene) {
          dispatch(setCurrentScene(i));
        }
        break;
      }
    }
  };
  const onScroll = () => {
    let OffsetY = window.pageYOffset;
    dispatch(setScrollOffsetY(OffsetY));
  };

  useEffect(() => {
    onCheckCurrentScene();
  }, [dispatch, scrolloffsetY]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <MainPage />
      </ThemeProvider>
    </>
  );
};
export default App;
