import styled from "styled-components";

export const StyledHeader = styled.div`
  background-color: none;
`;

export const StyledHero = styled.div`
  @media screen and (min-width: 375px) {
    :nth-child(3) {
      float: left;
      margin-left: 5vw;
      margin-top: 1vh;
    }
  }
  @media screen and (min-width: 768px) {
    //
  }
`;

export const ContentBox = styled.div`
  @media screen and (min-width:375px){
    //
  }
  @media screen and (min-width: 768px) {
    width: 55%;
    padding: 0 15px;

  }
`;
