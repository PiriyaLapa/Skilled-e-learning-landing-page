import { Component, ReactNode } from "react";
import { StyledCardSection } from "./styles";
import Card from "../../../components/Cards/Cards";
import { dataApisCard } from "../../../apis/dataCards";

export default class CardSection extends Component {
  render(): ReactNode {
    return (
      <StyledCardSection>
        {dataApisCard.map((cardData, index) => (
          <Card key={index} data={cardData} index={index} />
        ))}
      </StyledCardSection>
    );
  }
}
