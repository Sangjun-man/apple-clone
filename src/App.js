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

function App(props) {
  const dispatch = useDispatch();
  const { scrolloffsetY } = useSelector((store) => store.scroll);
  const { currentScene, scrollHeight, sceneInfo } = useSelector(
    (store) => store.size
  );
  const store = useStore();

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
    onResize();
    onScroll();

    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll);
    //addEventListener는 선언될때 함수를 따로 저장해두는 듯 하다,
  }, []);
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
}
export default App;
