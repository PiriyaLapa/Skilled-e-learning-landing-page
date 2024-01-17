import styled from "styled-components";

export const StyledFigure = styled.img`
  /* Mobile screen */
  @media screen and (min-width: 375px) {
    width: 100%;
    heigth: auto;
  }

  /* Tablet screen  */
  @media screen and (min-width: 768px) {
    width: 90%;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(10%,-50%);
    overflow:hidden;
  }
`;
