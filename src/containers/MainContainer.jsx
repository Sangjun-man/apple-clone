import React from 'react';
import PageViewContainer from '../components/layouts/PageViewContainer';
import MainNavBar from '../components/layouts/MainNavBar';
import SecondNavBar from '../components/layouts/SecondNavBar'
const MainContainer = (props) => {


    const navItems = ['Rooms', "Ideas", "Stores", "Contact"]
    const secondNavItems = ["개요", "제품사양", "구입하기"]
return (
    <>
        <PageViewContainer>
            <MainNavBar navItems={navItems} />
            <SecondNavBar emphasize={"AirMug Pro"} navItems={secondNavItems}></SecondNavBar>
            <div>
                여기에 페이지의 컨텐츠가 들어갈 예정
            </div>
        </PageViewContainer>
    </>
    );
}
export default MainContainer;