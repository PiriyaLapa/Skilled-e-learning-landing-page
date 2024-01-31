import { Component, ReactNode } from "react";
// import { StyledFooter } from "../../pages/LandingPage/sections/styles";
import { stateProps } from "../../pages/LandingPage/interface";
import Logo from "../Logos/Logo";
import { HeaderContent } from "../../apis/apis";
import PrimaryBtn from "../Buttons/PrimaryBtn";
import { theme, primaryBtnSize } from "../../utilities";
import { StyledFooter } from "../../pages/LandingPage/sections/styles";
import { FooterSection } from "../../pages/LandingPage/sections/styles";

export default class Footer extends Component<stateProps> {
  render(): ReactNode {
    const { logoContent, btnContent } = HeaderContent;
    const btnColor = theme.eighthColor;
    const hoverColor = theme.thirdHoverColor;

    const {
      mobileWidthSize,
      mobileHeightSize,
      defaultWidthSize,
      defaultHeightSize,
    } = primaryBtnSize;
    const { windowWidthState } = this.props;

    return (
      <FooterSection>
        <StyledFooter>
          <Logo message={logoContent} />
          <PrimaryBtn
            message={btnContent}
            color={btnColor}
            hoverColor={hoverColor}
            width={windowWidthState >= 375 ? mobileWidthSize : defaultWidthSize}
            height={
              windowWidthState >= 375 ? mobileHeightSize : defaultHeightSize
            }
          />
        </StyledFooter>
      </FooterSection>
    );
  }
}
