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
  
  /* Desktop screen size */
  @media screen and (min-width:1440px){
    width:50%;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(35%,-60%); 
  }
`;
