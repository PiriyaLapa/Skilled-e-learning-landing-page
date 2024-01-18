import styled from "styled-components";
import { theme } from "../../utilities";

export const StyledHeadLine = styled.span<{ theme: typeof theme }>`
  color: ${(props) => props.theme.secondColor};

  // Moblie screen
  @media screen and (min-width: 375px) {
    font-size: 40px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    display: block;
    text-align: left;
    padding: 25px 22px;
  }

  // Tablap screen 
  @media screen and (min-width:768px){
    width:62%;
    margin: 0;
    padding:0;
  }
`;
