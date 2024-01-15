import { Component, ReactNode } from "react";
import { MessageProps } from "../interface/Button";
import { StyledHeadContent } from "./styles";
import { theme } from "../../utilities";

export default class HeadContent extends Component<MessageProps> {
  render(): ReactNode {
    const { message } = this.props;
    return <StyledHeadContent theme={theme}>{message}</StyledHeadContent>;
  }
}
