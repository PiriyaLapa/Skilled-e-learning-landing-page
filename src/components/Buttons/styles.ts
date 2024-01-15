import styled from "styled-components";
import { theme } from "../../utilities";

// StyledBtn
export const StyledPrimaryBtn = styled.button<{ theme: typeof theme }>`
  &:hover {
    background-color:${(props) => props.theme.fistColor};
    transition: 0.4s;
    border:none;
  }
  
  @media screen and (min-width: 375px) {
    background: ${(props) => props.theme.secondColor};
    border-radius: 28px;
    border: none;
    height: 56px;
    width: 140px;
    color: white;
    font-weight: 600;
    position: relative;
    right: 0;
    top: 50%;
    transform: translateY(16%);
  }
`;
