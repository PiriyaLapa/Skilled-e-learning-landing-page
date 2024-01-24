import styled from "styled-components";
import { theme } from "../../utilities";

// StyledNavbar

export const StyledNavbar = styled.div<{ theme: typeof theme }>`
  
  @media screen and (min-width: 375px) {
    width: 90%;
    height: auto;
    text-align: center;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }

  /* Tablet screen size */
  @media screen and (min-width:768px){
    //
  }

  /* desktop screen size */
  @media screen and (min-width:1440px){
    width:83%;
  }
  
`;