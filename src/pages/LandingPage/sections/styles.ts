import styled from "styled-components";

export const StyledHeader = styled.div`
  //
`;

export const StyledHero = styled.div`
  // Mobile screen
  @media screen and (min-width: 375px) {
  }

  // Tablet screen
  @media screen and (min-width: 768px) {
    display:flex;
    justify-content:center;
    margin: 60px 38px;
  }
`;

export const ContentBox = styled.div`

  // Mobile screen
  @media screen and (min-width: 375px) {
  }

  // Tablet screen
  @media screen and (min-width: 768px) {
    * {
      margin: 10px 0;
    }
  }
`;
