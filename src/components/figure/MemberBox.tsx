import { Component, ReactNode } from "react";
import { DataScore } from "./interface";
import {StyledMemberBox} from './styles';

interface DataProps {
  data: DataScore;
}
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
