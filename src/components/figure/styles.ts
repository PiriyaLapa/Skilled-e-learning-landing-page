import styled from "styled-components";

export const StyledFigure = styled.img`
  /* Mobile screen */
  @media screen and (min-width: 375px) {
    width: 100%;
    height: auto;
  }

  /* Tablet screen  */
  @media screen and (min-width: 768px) {
    width: 80%;
    position: absolute;
    top: 260px;
    left: 380px;
    transform: translate(35px, -353px);
  }

  /* Desktop screen size */
  @media screen and (min-width: 1440px) {
    width: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(35%, -60%);
  }
`;

export const StyledHeroImg = styled.img`
  @media screen and (min-width: 768px) {
    width: 200%;
    heigth: auto;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -43%);
  }
`;

export const CircleShape = styled.div<{ color: string }>`
  display: inline-block;
  width: 80%;
  max-width: 253px;
  height: 253px;
  flex-shrink: 0;
  background: ${(props) => props.color};
  border-radius: 158.5px;
  justify-content: center;
  overflow: hidden;
`;

export const InnerBox = styled.div`
  @media screen and (min-width: 375px) {
    width: 100%;
    height: auto;
    margin-top: 8rem;
  }
`;

export const StyledMemberBox = styled.div<{ color: string }>`
  /* mobile screen size */
  @media screen and (min-width: 375px) {
    max-width: 105px;
    max-height: 100px;
    width: 100%;
    border-radius: 10px;
    float: right;
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: #ffff;
    transform: translate(50%, -28%);
    box-shadow: 0px 34px 54px 0px rgba(6, 22, 141, 0.16);

    span {
      font-size: 0.875rem;
      color: ${(props) => props.color};
      font-style: normal;
      line-height: 28px;
    }
    p {
      font-size: 2rem;
      font-weight: 800;
      font-style: normal;
      line-height: normal;
      margin: 0 auto;
      color: #13183f;
    }
  }
`;

export const StyledCourseBox = styled(StyledMemberBox)`
  @media screen and (min-width: 375px) {
    max-width: 155px;
    height: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-100%, 180%);
  }
`;

export const StyledTabletHero = styled.div`
  width: 100%;
  height: auto;
`;

export const InnerBoxOval = styled.div`
  @media screen and (min-width: 768px) {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-40%, -73%);
    :nth-child(1){
        overflow:visible;
    };
  }
`;

export const OvalA = styled.div<{ color: string }>`
  max-width: 317px;
  max-height: 560px;
  @media screen and (min-width: 768px) {
    width: 70%;
    height: 340px;
    flex-shrink: 0;
    border-radius: 158.5px;
    background: ${(props) => props.color};
    overflow: hidden;
    display: flex;
    z-index: 200;
  }
`;

export const OvalB = styled.div<{ color: string }>`
  @media screen and (min-width: 768px) {
    position: absolute;
    top: -120px;
    left: 630px;
    width: 216.54px;
    height: 650px;
    background: ${(props) => props.color};
    transform: rotate(45deg);
    border-radius: 158.5px;
  }
`;

export const StyledTabletHero2 = styled.img`

  @media screen and (min-width:375px){
    width:100%;
    hieght:auto;
    margin:0 auto;
  }
  
  // Tablet screen size
  @media screen and (min-width: 768px) {
    width: 95%;
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-3%, -68%);

    // Desktop screen size
    @media screen and (min-width:1440px){
      // width:80%;
      // position:relative;
      // top:50%;
      // left:50%;
      // transform:translate(-30%,-30%);

      width:70%;
      top:60%;
      left:60%;

    }
  }`;