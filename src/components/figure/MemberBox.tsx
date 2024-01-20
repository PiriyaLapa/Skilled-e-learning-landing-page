import { Component, ReactNode } from "react";
import { DataProps } from "./interface";
import {StyledMemberBox} from './styles';


export default class MemberBox extends Component<DataProps> {
  render(): ReactNode {
    const { data } = this.props;
    return (
      <StyledMemberBox>
        <span>{data.dataMember.title}</span>
        <p>{data.dataMember.score}</p>
      </StyledMemberBox>
    );
  }
}
