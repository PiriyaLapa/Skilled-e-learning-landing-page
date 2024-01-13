import { Component, ReactNode } from "react";
import { theme } from "../utilities";
import { StyledPrimaryBtn } from "../style/styledComponent";
import { MessageProps } from "./interface";

export default class PrimaryBtn extends Component<MessageProps> {
  render(): ReactNode {
    const { message } = this.props;
    return <StyledPrimaryBtn theme={theme}>{message}</StyledPrimaryBtn>;
  }
}
