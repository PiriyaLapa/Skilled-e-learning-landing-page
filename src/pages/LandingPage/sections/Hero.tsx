import { Component, ReactNode } from "react";
import { HeaderContent } from "../../../apis/apis";
import HeadLine from "../../../components/HeadLine/HeadLine";
import HeadContent from "../../../components/HeadContent/HeadContent";
import { StyledHero } from "./styles";
import PrimaryBtn from "../../../components/Buttons/PrimaryBtn";
import { theme } from "../../../utilities";
import Figure from "../../../components/figure/Figure";
import urlImg from "../../../assets/image-hero-mobile.png";
import TableImg from "../../../assets/image-hero-tablet.png";
import { ContentBox } from "./styles";

export default class Hero extends Component {
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
    const { headLine, paraContent, btnContent } = HeaderContent;
    const btnColor = theme.sventhColor;
    const hoverColor = theme.fistColor;
    const { windowWidth } = this.state;

    return (
      <StyledHero>
        <ContentBox>
          <HeadLine message={headLine} />
          <HeadContent message={paraContent} />
          <PrimaryBtn
            message={btnContent}
            color={btnColor}
            hoverColor={hoverColor}
          />
            <Figure urlImg={windowWidth >= 768 ? TableImg : urlImg} />
        </ContentBox>
      </StyledHero>
    );
  }
}
