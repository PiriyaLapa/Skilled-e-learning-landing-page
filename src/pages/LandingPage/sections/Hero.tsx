import { Component, ReactNode } from "react";
import { HeaderContent } from "../../../apis/apis";
import HeadLine from "../../../components/HeadLine/HeadLine";
import HeadContent from "../../../components/HeadContent/HeadContent";
import { StyledHero } from "./styles";
import PrimaryBtn from "../../../components/Buttons/PrimaryBtn";
import { theme, primaryBtnSize } from "../../../utilities";
import { ContentBox } from "./styles";
import mobileImg from "../../../assets/meterial/hero-mobile/heroImg.png";
import MobileHero from "../../../components/figure/MobileHero/MobileHero";
import { stateProps } from "../interface";
import TabletHero from "../../../components/figure/TabletHero/TabletHero";
import tabletHeroImg from '../../../assets/TabletHero.png';
import testTabletImg from '../../../assets/image-hero-tablet.webp'

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

const bgColor = theme.sventhColor;
const renderHeroComponent = (windowWidth: number, tabletScreenSize: number) => {
  return windowWidth >= tabletScreenSize ? (
    // <TabletHero urlImg={tabletHeroImg} color={bgColor} />
    <TabletHero urlImg={testTabletImg} color={bgColor} />
  ) : (
    <MobileHero urlImg={mobileImg} color={bgColor} />
  );
};
