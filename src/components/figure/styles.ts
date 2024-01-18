import styled from "styled-components";

export const StyledFigure = styled.img`
  /* Mobile screen */
  @media screen and (min-width: 375px) {
    width: 100%;
    heigth: auto;
  }

  /* Tablet screen  */
  @media screen and (min-width: 768px) {
    width:80%;
    position:absolute;
    top:260px;
    left:380px;
    transform:translate(35px,-353px);
  }
`;
