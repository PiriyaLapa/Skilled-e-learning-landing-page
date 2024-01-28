import styled from "styled-components";

export const StyledHeader = styled.div`
  //
`;

export const StyledHero = styled.div`
  // Mobile screen
  @media screen and (min-width: 375px) {
    //
    width:100%;
    height:auto;
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
    margin-bottom: 5rem;
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
    padding: 38px;
  }
`;
export const StyledTabletImg = styled.img<{ urlImg: string }>`
  width: 100%;
  height: auto;
`;

export const StyledTabletHero2 = styled.img`
  @media screen and (min-width: 768px) {
    width: 95%;
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-3%, -68%);
  }
`;

export const StyledCardSection = styled.section`
  height: auto;
  width: 100%;
  @media screen and (min-width: 375px) {
    width:100%;
    max-height: 2615px;
    height:auto;
  }
`;
