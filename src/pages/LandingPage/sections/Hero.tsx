import { Component, ReactNode } from "react";
import { HeaderContent } from "../../../apis/apis";
import HeadLine from "../../../components/HeadLine/HeadLine";
import HeadContent from "../../../components/HeadContent/HeadContent";
import { StyledHero } from "./styles";
import PrimaryBtn from "../../../components/Buttons/PrimaryBtn";
import { theme, primaryBtnSize } from "../../../utilities";
import { ContentBox } from "./styles";
import { stateProps } from "../interface";
import tablImgWebs from "../../../assets/image-hero-tablet@2x.webp";
import desktopImgWebs from "../../../assets/image-hero-desktop@2x.webp";
import TabletHero2 from "../../../components/figure/TabletHero/TabletHero2";
import mobileImgWebs from "../../../assets/image-hero-mobile.webp";

export default class Hero extends Component<stateProps> {
  render(): ReactNode {
    const { headLine, paraContent, btnContent } = HeaderContent;
    const btnColor = theme.sventhColor;
    const hoverColor = theme.fistColor;
    const { windowWidthState } = this.props;
    const tabletScreenSize = 768;
    const mobileScreenSize = 375;
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
            width={
              windowWidthState >= mobileScreenSize
                ? defaultWidthSize
                : mobileWidthSize
            }
            height={
              windowWidthState >= mobileScreenSize
                ? defaultHeightSize
                : mobileHeightSize
            }
          />
        </ContentBox>
        {renderHeroComponent(windowWidthState, tabletScreenSize)}
      </StyledHero>
    );
  }
}

const renderHeroComponent = (windowWidth: number, tabletScreenSize: number) => {
  return windowWidth >= tabletScreenSize ? (
    <TabletHero2 urlImg={windowWidth >= 1440 ? desktopImgWebs : tablImgWebs} />
  ) : (
    <TabletHero2 urlImg={mobileImgWebs} />
  );
};
