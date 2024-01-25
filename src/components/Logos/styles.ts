import styled from "styled-components";
import { theme } from "../../utilities";

// StyleLogo
export const StyledLogo = styled.h1<{ theme: typeof theme }>`
  font-size: 28px;
  font-style: normall;
  font-weight: 800;
  line-height: normall;
  text-align: center;
  display: relative;
  color: ${(props) => props.theme.secondColor};

  // Mobile screen size
  @media screen and(min-375) {
    font-size: 28px;
    font-style: normall;
    font-weight: 800;
    line-height: normall;
    text-align: center;
    display: relative;
    color: ${(props) => props.theme.secondColor};
  }

  // Tablet screen size
  @media screen and (min-width:768px) {
    font-size: 28px;
  }

  // Desktop screen size
  @media screen and (min-width:1440px){
    font-size:36px;
  }
`;
