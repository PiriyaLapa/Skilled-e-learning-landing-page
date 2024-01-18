import styled from "styled-components";

export const StyledHeader = styled.div`
  //
`;

export const StyledHero = styled.div`
  // Mobile screen
  @media screen and (min-width: 375px) {
    //
  }

  // Tablet screen
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    margin: 60px 38px;
  }

  /* Desktop screen size */
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    margin-left: 80px;
    margin-top: 135px;
  }
`;

export const ContentBox = styled.div`
  // Mobile screen
  @media screen and (min-width: 375px) {
  }

  // Tablet screen
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 25px;
  }

  /* Desktop screen size */
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
  }
`;
