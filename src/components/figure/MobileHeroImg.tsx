import { Component, ReactNode } from "react";
import { urlImgProps } from "../interface/MobileHeroImg";
import { StyledHeroImg, CircleShape } from "./styles";


export default class MobileHeroImg extends Component<urlImgProps> {
  render(): ReactNode {
    const {urlImg, color} = this.props
    return (
      <CircleShape color={color}>
        <StyledHeroImg src={urlImg} alt="HeroImg"  />
      </CircleShape>
    );
  }
}
