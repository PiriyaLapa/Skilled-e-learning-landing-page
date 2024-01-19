import { Component, ReactNode } from "react";
import { StyledNavbar } from "../Navbars/style";
import PrimaryBtn from "../Buttons/PrimaryBtn";
import Logo from "../Logos/Logo";
import { HeaderContent } from "../../apis/apis";
import { theme,primaryBtnSize } from "../../utilities";

export class Navbar extends Component {
  render(): ReactNode {
    const { logoContent, btnContent } = HeaderContent;
    const btnColor = theme.secondColor;
    const hoverColor = theme.fistColor;
    const {mobileWidthSize, mobileHeightSize} = primaryBtnSize; 
    return (
      <StyledNavbar>
        <Logo message={logoContent} />
        <PrimaryBtn message={btnContent} color={btnColor} hoverColor={hoverColor} width={mobileWidthSize} height={mobileHeightSize} />
      </StyledNavbar>
    );
  }
}
