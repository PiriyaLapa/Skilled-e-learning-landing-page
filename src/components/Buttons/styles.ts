import styled from "styled-components";
import { theme } from "../../utilities";

// StyledBtn
export const StyledPrimaryBtn = styled.button<{ theme: typeof theme }>`
  @media screen and (min-width: 375px) {
    background: ${(props) => props.theme.secondColor};
    border-radius: 28px;
    border: none;
    height: 56px;
    width: 140px;
    color:white;
    font-weight:600;
    position:relative;
    right:0;
    top:50%;
    transform:translateY(16%);
  }
`;

// StyleLogo
export const StyledLogo = styled.h1`
  font-size:28px; 
  font-style:normall;
  font-weight:800;
  line-height:normall;
  text-align:center;
  display:relative;
`;
