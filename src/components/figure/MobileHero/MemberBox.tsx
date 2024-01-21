import { Component, ReactNode } from "react";
import { DataProps } from "../interface";
import { StyledMemberBox } from "../styles";
import { theme } from "../../../utilities";

export default class MemberBox extends Component<DataProps> {
  render(): ReactNode {
    const { data } = this.props;
    const {thirdColor} = theme;
    return (
      <StyledMemberBox color={thirdColor}>
        <span>{data.dataMember.title}</span>
        <p>{data.dataMember.score}</p>
      </StyledMemberBox>
    );
  }
}
