import React, { useEffect} from 'react';
import { navItems, secondNavItems, scrollParagraph,scrollParagraph2, scrollParagraph3, scrollParagraph4 } from '../data/MainParagraph';
import PageViewContainer from '../components/layouts/PageViewContainer';
import MainNavBar from '../components/layouts/MainNavBar';
import SecondNavBar from '../components/layouts/SecondNavBar'
import ScrollSection from '../components/layouts/ScrollSection';
import Footer from '../components/layouts/Footer'
import CustomContainer from '../components/layouts/CustomContainer'
import Reducer from '../components/features/Reducer';
import { useDispatch, useSelector } from 'react-redux';
import { setScrollOffsetY } from '../modules/scroll';
import { setSceneHeight, setSectionHeight } from '../modules/size';
// index.js 로 레이아웃 다 가져오기???

const MainContainer = (props) => {
    
    const dispatch = useDispatch();
    const { sectionHeight, currentScene } = useSelector(store => store.size);
    const { scrolloffsetY} = useSelector(store => store.scroll);

    



    const onResize = () => {
        let heightNum = 5
        let height = heightNum * window.innerHeight;

        console.log(height,"사이즈 잘 오나"        );
        dispatch(setSectionHeight(height));

        for (let i = 0; i < 4; i++) {
            dispatch(setSceneHeight({ sceneNum:i, type:"sticky", scrollHeight:height }))
        
        }
    };

    const onScroll = () => {
        let OffsetY = window.pageYOffset;
        dispatch(setScrollOffsetY(OffsetY));
     };


    useEffect(() => {
        onResize();
        window.addEventListener('load', () => onResize())
        window.addEventListener('resize', () => onResize())
        window.addEventListener('scroll', () => onScroll())
    }, [])




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





    return (
    <>
        <PageViewContainer>
            <CustomContainer>
                <MainNavBar navItems={navItems}  />
                <SecondNavBar emphasize={"AirMug Pro"} navItems={secondNavItems}></SecondNavBar>
            </CustomContainer>
                <ScrollSection height={sectionHeight} >
                {scrollParagraph.map((data) => {
                    return (<CustomContainer margin={"0 5px 3em 5px;"}  >{
                        data.map((obj) => { return <Reducer obj={obj}> </Reducer> })}
                    </CustomContainer>)       
                })}
                        
                    </ScrollSection>
            <ScrollSection >
                {scrollParagraph2.map((data) => {
                        return (<CustomContainer margin={"0 0 3em 0;"}>{
                            data.map((obj) => { return <Reducer obj={obj}> </Reducer> })}
                        </CustomContainer>)       
                        })}
            </ScrollSection>
            <ScrollSection  height={sectionHeight} >
                {scrollParagraph3.map((data) => {
                            return (<CustomContainer margin={"0 0 3em 0;"}>{
                                data.map((obj) => { return <Reducer obj={obj}> </Reducer> })}
                            </CustomContainer>)       
                            })}
            </ScrollSection>
            <ScrollSection height={sectionHeight} >
                {scrollParagraph4.map((data) => {
                                return (<CustomContainer margin={"0 0 3em 0;"}>{
                                    data.map((obj) => { return <Reducer obj={obj}> </Reducer> })}
                                </CustomContainer>)       
                                })}
            </ScrollSection>
        </PageViewContainer>
        <Footer />
    </>
    );
}
export default MainContainer;