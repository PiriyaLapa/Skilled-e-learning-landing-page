import { Component, ReactNode } from "react";
import { StyledNavbar } from "../../style/styledComponent";


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
