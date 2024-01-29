import { Component, ReactNode } from "react";
import { StyledCards } from "./styleds";
import { CARDDATA } from "../../apis/dataCards";
import { getIconComponent } from "../../Helper/helper";

interface dataProps {
  data: CARDDATA;
  index: number;
}

export default class Card extends Component<dataProps> {
  render(): ReactNode {
    const { id, title, content } = this.props.data;
    let iconComponent = getIconComponent(id);
    return (
      <StyledCards >
        {iconComponent}
        <span>{title}</span>
        <span>{content}</span>
        <span>Get Start</span>
      </StyledCards>
    );
  }
}
