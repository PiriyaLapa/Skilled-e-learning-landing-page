import styled from "styled-components";
import { theme } from "../../utilities";

export const StyledHeadContent = styled.div<{ theme: typeof theme }>`
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.625rem;
  color: ${(props) => props.theme.thirdColor};
  text-align: left;
  padding: 5px 25px;

  /* Tablet screen */
  @media screen and (min-width: 768px) {
    width:50%;    
    margin:0;
    padding:0;
  font-weight: 400;

  }

  /* Desktop screen size */
  @media screen and (min-width:1440px){
    font-size:1.125rem;
  }
`;
