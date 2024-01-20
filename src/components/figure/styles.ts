import styled from "styled-components";

export const StyledFigure = styled.img`
  /* Mobile screen */
  @media screen and (min-width: 375px) {
    width: 100%;
    heigth: auto;
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
  padding: 1.5rem 0;
  background: ${(props) => props.color};
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

export const StyledMemberBox = styled.div`
  /* mobile screen size */
  @media screen and (min-width: 375px) {
    max-width: 105px;
    max-height: 100px;
    width: 100%;
    border-radius: 10px;
    float: right;
    position:absolute;
    top:50%;
    left:50%;
    background-color:#ffff;
    transform:translate(50%,-28%);
    box-shadow: 0px 34px 54px 0px rgba(6, 22, 141, 0.16);
    span {
      font-size: 0.875rem;
      font-style: normal;
      line-height: 28px;
    }
    p {
      font-size: 2rem;
      font-weight: 800;
      font-style: normal;
      line-height: normal;
      margin: 0 auto;
    }
  }
`;
