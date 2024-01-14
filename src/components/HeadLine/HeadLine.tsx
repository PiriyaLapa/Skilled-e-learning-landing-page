import { Component, ReactNode } from "react";
import { MessageProps } from "../interface/Button";
import { StyledHeadLine } from "./styles";

export default class HeadLine extends Component<MessageProps> {
  render(): ReactNode {
    const { message } = this.props;
    return <StyledHeadLine>{message}</StyledHeadLine>;
  }
}
