import { Component, ReactNode } from "react";
import { StyledPrimaryBtn } from "./styles";
import { PrimaryBtnProps } from "../interface/Button";


export default class PrimaryBtn extends Component<PrimaryBtnProps> {
  render(): ReactNode {
    const { message,color} = this.props;
    return <StyledPrimaryBtn color={color}>{message}</StyledPrimaryBtn>;
  }
}
