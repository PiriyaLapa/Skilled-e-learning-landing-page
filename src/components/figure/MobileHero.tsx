import { Component, ReactNode } from "react";
import { urlImgProps } from "../interface/MobileHeroImg";
import { StyledHeroImg, CircleShape, InnerBox } from "./styles";

export default class MobileHero extends Component<urlImgProps> {
  render(): ReactNode {
    const { urlImg, color } = this.props;
    return (
      <InnerBox>
        <CircleShape color={color}>
          <StyledHeroImg src={urlImg} alt="HeroImg" />
        </CircleShape>
      </InnerBox>
    );
  }
}
