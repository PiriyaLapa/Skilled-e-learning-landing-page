import { Component, ReactNode } from "react";
import { MessageProps } from "../interface/Button";
import { StyledHeadLine } from "./styles";
import {theme} from '../../utilities';

export default class HeadLine extends Component<MessageProps> {
  render(): ReactNode {
    const { message } = this.props;
    return <StyledHeadLine theme={theme}>{message}</StyledHeadLine>;
  }
}
