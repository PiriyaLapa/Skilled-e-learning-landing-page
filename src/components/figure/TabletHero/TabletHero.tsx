import { Component, ReactNode } from "react";
import {  StyledHeroImg, StyledTabletHero } from "../styles";
import { urlImgProps } from "../../interface/MobileHeroImg";
import { InnerBoxOval, OvalA } from "../styles";
import { theme } from "../../../utilities";

export default class TabletHero extends Component<urlImgProps> {
  render(): ReactNode {
    const { urlImg, color } = this.props;
    // const {eighthColor} = theme;

    return (
      <StyledTabletHero>
        <InnerBoxOval>
          <OvalA color={color}>
            <StyledHeroImg src={urlImg} alt="HeroImg" />
          </OvalA>
          {/* <OvalB color={eighthColor}/> */}
        </InnerBoxOval>
      </StyledTabletHero>
    );
  }
}
