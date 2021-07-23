import React from 'react';
import { navItems, secondNavItems, scrollParagraph,scrollParagraph2, scrollParagraph3, scrollParagraph4 } from '../data/MainParagraph';
import PageViewContainer from '../components/layouts/PageViewContainer';
import MainNavBar from '../components/layouts/MainNavBar';
import SecondNavBar from '../components/layouts/SecondNavBar'
import ScrollSection from '../components/layouts/ScrollSection';
import Footer from '../components/layouts/Footer'
import CustomContainer from '../components/layouts/CustomContainer'
import Reducer from '../components/features/Reducer';
// index.js 로 레이아웃 다 가져오기???



const MainContainer = (props) => {
    //navItems - >
    
    return (
    <>
        <PageViewContainer>
            <MainNavBar navItems={navItems} />
                <SecondNavBar emphasize={"AirMug Pro"} navItems={secondNavItems}></SecondNavBar>

                <ScrollSection id={"scroll-0"}>
                    {scrollParagraph.map((data) => {
                        return (<CustomContainer margin={"0 0 3em 0;"}>{
                            data.map((obj) => { return <Reducer obj={obj}> </Reducer> })}
                        </CustomContainer>)       
                        })}
                </ScrollSection>
                <ScrollSection id={"scroll-1"} paragraph={scrollParagraph2}>
                    {scrollParagraph2.map((data) => {
                            return (<CustomContainer margin={"0 0 3em 0;"}>{
                                data.map((obj) => { return <Reducer obj={obj}> </Reducer> })}
                            </CustomContainer>)       
                            })}
                </ScrollSection>
                <ScrollSection id={"scroll-2"} paragraph={scrollParagraph3}>
                    {scrollParagraph3.map((data) => {
                                return (<CustomContainer margin={"0 0 3em 0;"}>{
                                    data.map((obj) => { return <Reducer obj={obj}> </Reducer> })}
                                </CustomContainer>)       
                                })}
                </ScrollSection>
                <ScrollSection id={"scroll-3"} paragraph={scrollParagraph4}>
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