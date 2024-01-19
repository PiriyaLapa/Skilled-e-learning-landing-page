import { Component, ReactNode } from "react";
import { StyledPrimaryBtn } from "./styles";
import { PrimaryBtnProps } from "../interface/Button";

export default class PrimaryBtn extends Component<PrimaryBtnProps> {
  render(): ReactNode {
    const { message, color, hoverColor, width, height } = this.props;
    return (
      <StyledPrimaryBtn color={color} $hovercolor={hoverColor} width={width} height={height}>
        {message}
      </StyledPrimaryBtn>
    );
  }
}
