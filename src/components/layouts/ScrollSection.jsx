import React from 'react';
import styled, { css } from 'styled-components';

const StyledScrollSection = styled.section`
 /*sticky elem*/
 position:relative;
 padding-top : 50vh;
`
//그냥 스크롤섹션 컴포넌트는 커다란 칸을 나누는거밖에 없네,, 일단은



const ScrollSection = ({children}) => {
    

    //paragraph -> 이중 배열, 
    return (
        <StyledScrollSection >
            {children}
        </StyledScrollSection>
    );
};
export default ScrollSection;