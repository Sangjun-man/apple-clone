import MainPage from './pages/MainPage'
import { ThemeProvider } from 'styled-components';
import theme from './style/theme'




function App() {



  
// let [viewHeight, viewWidth, positionY] = [0, 0, 0]
// const dispatch = useDispatch();


// const onScroll = () => {
//   dispatch(set)
// }
// const onResize = (viewWidth) => {
//   dispatch(setHeight(viewWidth));
  
// }

// useEffect(() => {
//   viewHeight = window.innerHeight;
//   viewWidth = window.innerWidth;
//   window.addEventListener('scroll', onScroll)
//   window.addEventListener('resize', () => onResize(viewHeight));
// }, [])


  
  return (<>
    <ThemeProvider theme={ theme }>
      <MainPage />
    </ThemeProvider>
   </>);
}
export default App;
