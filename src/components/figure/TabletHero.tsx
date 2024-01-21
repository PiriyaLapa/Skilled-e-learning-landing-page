import { Component, ReactNode } from "react";
import { InnerBoxOval, OvalA, StyledHeroImg, StyledTabletHero } from "./styles";
import { urlImgProps } from "../interface/MobileHeroImg";

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