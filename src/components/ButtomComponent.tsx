import { Component, ReactNode } from "react";
import styled from "styled-components";
import { theme } from "../utilities";

interface MessageProps {
  message: string;
}

const StyledPrimaryBtn = styled.button<{ theme: typeof theme }>`
  @media screen and (min-width: 375px) {
    background: ${(props) => props.theme.secondColor};
    border-radius: 28px;
    border: none;
    height: 56px;
    width: 140px;
    color:white;
    font-weight:600;
    margin:8px 0;
  }
`;

export default class PrimaryBtn extends Component<MessageProps> {
  render(): ReactNode {
    const { message } = this.props;
    return <StyledPrimaryBtn theme={theme}>{message}</StyledPrimaryBtn>;
  }
}
