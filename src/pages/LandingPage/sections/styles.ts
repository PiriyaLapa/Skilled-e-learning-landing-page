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
        overflow:hidden;
      
      :nth-child(2){
        width:30%; 
      }
    }  
  }
`;

export const ContentBox = styled.div`

// Tablet screen
  border:1px solid red;
  @media screen and (min-width: 768px) {
    padding: 0 15px;
  }
`;


