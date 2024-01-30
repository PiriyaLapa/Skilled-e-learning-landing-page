import { Component, ReactNode } from "react";
import { StyledCards } from "./styleds";
import { CARDDATA } from "../../apis/dataCards";
import { getIconComponent } from "../../Helper/helper";

export interface dataProps {
  data: CARDDATA;
  index?: number;
}

export default class Card extends Component<dataProps> {
  render(): ReactNode {
    const { id, title, content } = this.props.data;
    let iconComponent = getIconComponent(id);
    return (
      <StyledCards>
        {iconComponent}
        <span>{title}</span>
        <span>{content}</span>
        {id > 0 ? <span>Get start</span> : null}
        {/* <span>Get start</span> */}
      </StyledCards>
    );
  }
}
