import { Component, ReactNode } from "react";
import { theme } from "../../utilities";
import { MessageProps } from "../interface/Button";
import { StyledPrimaryBtn } from "./styles";

export default class PrimaryBtn extends Component<MessageProps> {
  render(): ReactNode {
    const { message } = this.props;
    return <StyledPrimaryBtn theme={theme}>{message}</StyledPrimaryBtn>;
  }
}
