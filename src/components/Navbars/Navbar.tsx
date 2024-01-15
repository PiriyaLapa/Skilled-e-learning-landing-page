import { Component, ReactNode } from "react";
import { StyledNavbar } from "./style";
import PrimaryBtn from "../Buttons/PrimaryBtn";
import Logo from "../Logos/Logo";
import { HeaderContent } from "../../apis/apis";
import { theme } from "../../utilities";

export class Navbar extends Component {
  render(): ReactNode {
    const { logoContent, btnContent } = HeaderContent;
    const  btnColor  = theme.secondColor;
    return (
      <StyledNavbar>
        <Logo message={logoContent} />
        <PrimaryBtn message={btnContent} color={btnColor} />
      </StyledNavbar>
    );
  }
}
