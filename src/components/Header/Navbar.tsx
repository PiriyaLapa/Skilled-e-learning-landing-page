import { Component, ReactNode } from "react";
import { StyledNavbar } from "../../style/styledComponent";
import PrimaryBtn from "../ButtomComponent";


export class Navbar extends Component {
  render(): ReactNode {
    return (
      <StyledNavbar>
        <h1>Logo</h1>
        <PrimaryBtn message="Get Started" />
      </StyledNavbar>
    );
  }
}
