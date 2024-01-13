import { Component, ReactNode } from "react";
import styled from "styled-components";
import { theme } from "../../utilities";

const StyledNavbar = styled.div<{ theme?: typeof theme }>`
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

export class Navbar extends Component {
  render(): ReactNode {
    return (
      <StyledNavbar>
        <h1>Logo</h1>
        <button type="submit">button</button>
      </StyledNavbar>
    );
  }
}
