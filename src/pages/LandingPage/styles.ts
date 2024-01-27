import styled from "styled-components";

// style landingPage
export const StyledLandingPage = styled.div`
    position:relative;
    overflow:hidden;
    background: linear-gradient(180deg, #FFF 0%, #F0F1FF 100%);
    height:auto;

    // Mobile screen size
    @media screen and (min-width:375px){
        // max-height:2615px;
    }; 

    // Tablet screen size
    @media screen and (min-width:768px){
        max-height:1760px
    };
    
    // Desktop screen size
    @media screen and (min-width:1440px){
        max-height:1845px;
    }

`;

