import { Component, ReactNode } from "react";
import { OvalB, StyledHeroImg, StyledTabletHero } from "../styles";
import { urlImgProps } from "../../interface/MobileHeroImg";
import { InnerBoxOval, OvalA } from "../styles";

export default class TabletHero extends Component<urlImgProps> {
  render(): ReactNode {
    const { urlImg, color } = this.props;
    return (
      <StyledTabletHero>
        <h1>Heloo world</h1>
        <InnerBoxOval>
          <OvalA color={color}>
            <StyledHeroImg src={urlImg} alt="HeroImg" />
          </OvalA>
        </InnerBoxOval>
      </StyledTabletHero>
    );
  }
}
