import { Component, ReactNode } from "react";
import { StyledNavbar } from "../../style/styledComponent";
import PrimaryBtn from "../ButtomComponent";
import Logo from "./Logo";
import { HeaderContent } from "../../utilities";

export class Navbar extends Component {
  render(): ReactNode {
    const { logoContent, btnContent } = HeaderContent;
    return (
      <StyledNavbar>
        <Logo message={logoContent} />
        <PrimaryBtn message={btnContent} />
      </StyledNavbar>
    );
  }
}
