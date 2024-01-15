import { Component, ReactNode } from "react";
import { StyledLogo } from "./styles";
import { MessageProps } from "../interface/Button";
import { theme } from "../../utilities";

export default class Logo extends Component<MessageProps> {
  render(): ReactNode {
    const { message } = this.props;
    return <StyledLogo theme={theme}>{message}</StyledLogo>;
  }
}
