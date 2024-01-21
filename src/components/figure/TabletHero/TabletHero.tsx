import { Component, ReactNode } from "react";
import { StyledHeroImg, StyledTabletHero } from "../styles";
import { urlImgProps } from "../../interface/MobileHeroImg";
import { InnerBoxOval, OvalA } from "../styles";

export default class TabletHero extends Component<urlImgProps> {
  render(): ReactNode {
    const { urlImg, color } = this.props;
    return (
      <StyledTabletHero>
        <InnerBoxOval>
          <OvalA color={color}>
            <StyledHeroImg src={urlImg} alt="HeroImg" />
          </OvalA>
        </InnerBoxOval>
      </StyledTabletHero>
    );
  }
}
