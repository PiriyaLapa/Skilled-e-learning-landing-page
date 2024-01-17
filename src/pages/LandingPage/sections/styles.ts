import styled from "styled-components";

export const StyledHeader = styled.div`
  background-color: none;
`;

export const StyledHero = styled.div`
  overflow:hidden;

  // Mobile screen
  @media screen and (min-width: 375px) {
    :nth-child(3) {
      float: left;
      margin-left: 5vw;
      margin-top: 1vh;
    }

    // Tablat screen
    @media screen and (min-width:768px){

    }  
  }
`;

export const ContentBox = styled.div`
  width:100%;
// Tablet screen
  border:1px solid red;
  @media screen and (min-width: 768px) {
    width:60%;
    padding: 0 15px;
    :nth-child(1){
      width:90%;
    }
    :nth-child(2){

    }
  }
`;


