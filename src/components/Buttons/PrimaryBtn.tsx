import { Component, ReactNode } from "react";
import { MessageProps } from "../interface/Button";
import { StyledPrimaryBtn } from "./styles";

interface PrimaryBtnProps extends MessageProps{
  color:string
}

export default class PrimaryBtn extends Component<PrimaryBtnProps> {
  render(): ReactNode {
    const { message,color} = this.props;
    return <StyledPrimaryBtn color={color}>{message}</StyledPrimaryBtn>;
  }
}
