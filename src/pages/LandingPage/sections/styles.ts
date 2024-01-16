import styled from "styled-components";

export const StyledHeader = styled.div`
  background-color: none;
`;

export const StyledHero = styled.div`
  // Mobile screen
  @media screen and (min-width: 375px) {
    :nth-child(3) {
      float: left;
      margin-left: 5vw;
      margin-top: 1vh;
    }

    // Tablat screen
    @media screen and (min-width:768px){
      :nth-child(2){
        width:30%;
        position:relative;
        top:50px;
      }
    }  
  }
`;

export const ContentBox = styled.div`
  display:inline-block;
  @media screen and (min-width: 768px) {
    width: 45%;
    padding: 0 15px;
  }
`;
