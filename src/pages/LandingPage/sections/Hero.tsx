import { Component, ReactNode } from "react";
import { HeaderContent } from "../../../apis/apis";
import HeadLine from "../../../components/HeadLine/HeadLine";
import HeadContent from "../../../components/HeadContent/HeadContent";
import { StyledHero } from "./styles";
import PrimaryBtn from "../../../components/Buttons/PrimaryBtn";
import { theme, primaryBtnSize } from "../../../utilities";
// import TableImg from "../../../assets/image-hero-tablet.png";
import { ContentBox } from "./styles";
import mobileImg from "../../../assets/meterial/hero-mobile/heroImg.png";
import MobileHero from "../../../components/figure/MobileHero";
import {stateProps} from '../interface';

export default class Hero extends Component<stateProps>{

  render(): ReactNode {
    const { headLine, paraContent, btnContent } = HeaderContent;
    const btnColor = theme.sventhColor;
    const hoverColor = theme.fistColor;
    const bgColor = theme.sventhColor;
    const { windowWidthState } = this.props;
    const {
      mobileWidthSize,
      mobileHeightSize,
      defaultWidthSize,
      defaultHeightSize,
    } = primaryBtnSize;

    return (
      <StyledHero>
        <ContentBox>
          <HeadLine message={headLine} />
          <HeadContent message={paraContent} />
          <PrimaryBtn
            message={btnContent}
            color={btnColor}
            hoverColor={hoverColor}
            width={windowWidthState >= 375 ? defaultWidthSize : mobileWidthSize}
            height={windowWidthState >= 375 ? defaultHeightSize : mobileHeightSize}
          />
        </ContentBox>
        {/* <Figure urlImg={windowWidth >= 768 ? TableImg : urlImg} /> */}
        <MobileHero urlImg={mobileImg} color={bgColor} />
      </StyledHero>
    );
  }
}
