import styled from "styled-components";
import {theme} from '../utilities';
// style landingPage
export const StyledLandingPage = styled.div`
    @media screen and (min-width:375px){
    
    }
`;

// StyledNavbar
export const StyledNavbar = styled.div<{ theme: typeof theme }>`
  @media screen and (min-width: 375px) {
    width: 80%;
    height: auto;
    border: 1px solid yellow;
    text-align: center;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
`;

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
    margin:8px 0;
  }
`;
