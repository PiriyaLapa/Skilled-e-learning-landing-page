import styled from "styled-components";
import { theme } from "../../utilities";

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