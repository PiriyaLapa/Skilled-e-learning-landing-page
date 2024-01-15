import { Component, ReactNode } from "react";
import { HeaderContent } from "../../../apis/apis";
import HeadLine from "../../../components/HeadLine/HeadLine";
import HeadContent from "../../../components/HeadContent/HeadContent";
import { StyledHero } from "./styles";
import PrimaryBtn from "../../../components/Buttons/PrimaryBtn";
import { theme } from "../../../utilities";
import Figure from "../../../components/figure/Figure";
import urlImg from "../../../assets/image-hero-mobile.png";
import { ContentBox } from "./styles";

export default class Hero extends Component {
  render(): ReactNode {
    const { headLine, ParaContent, btnContent } = HeaderContent;
    const btnColor = theme.sventhColor;
    const hoverColor = theme.fistColor;
    return (
      <StyledHero>
        <ContentBox>
          <HeadLine message={headLine} />
          <HeadContent message={ParaContent} />
          <PrimaryBtn message={btnContent}
            color={btnColor}
            hoverColor={hoverColor}
          />
        </ContentBox>
        <Figure urlImg={urlImg} />
      </StyledHero>
    );
  }
}
