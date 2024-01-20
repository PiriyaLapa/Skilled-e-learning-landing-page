import { Component, ReactNode } from "react";
import { StyledNavbar } from "./style";
import PrimaryBtn from "../Buttons/PrimaryBtn";
import Logo from "../Logos/Logo";
import { HeaderContent } from "../../apis/apis";
import { theme, primaryBtnSize } from "../../utilities";

export class Navbar extends Component {
  state = {
    windowWidth: window.innerWidth,
  };

  updateWindowWidth = () => {
    this.setState({
      windowWidth: window.innerWidth,
    });
  };

  componentDidMount(): void {
    window.addEventListener("resize", this.updateWindowWidth);
  }

  componentWillUnmount(): void {
    window.removeEventListener("resize", this.updateWindowWidth);
  }

  render(): ReactNode {
    const { logoContent, btnContent } = HeaderContent;
    const btnColor = theme.secondColor;
    const hoverColor = theme.fistColor;
    const {
      mobileWidthSize,
      mobileHeightSize,
      defaultWidthSize,
      defaultHeightSize,
    } = primaryBtnSize;
    const { windowWidth} = this.state;


    return (
      <StyledNavbar>
        <Logo message={logoContent} />
        <PrimaryBtn
          message={btnContent}
          color={btnColor}
          hoverColor={hoverColor}
            width={windowWidth >= 375 ? mobileWidthSize : defaultWidthSize}
            height={windowWidth >= 375 ? mobileHeightSize : defaultHeightSize}
        />
      </StyledNavbar>
    );
  }
}
