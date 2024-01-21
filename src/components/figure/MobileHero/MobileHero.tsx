import { Component, ReactNode } from "react";
import { urlImgProps } from "../../interface/MobileHeroImg";
import { StyledHeroImg,CircleShape,InnerBox } from "../styles";
import { dataScore } from "../../../utilities";
import MemberBox from "./MemberBox";
import CourseBox from "./CourseBox";

export default class MobileHero extends Component<urlImgProps> {
  render(): ReactNode {
    const { urlImg, color } = this.props;
    const { dataMember , dataCourse} = dataScore;
    return (
      <InnerBox>
        <MemberBox data={{dataMember,dataCourse}} />
        <CourseBox data={{dataMember,dataCourse}} /> 
        <CircleShape color={color}>
          <StyledHeroImg src={urlImg} alt="HeroImg" />
        </CircleShape>
      </InnerBox>
    );
  }
}
