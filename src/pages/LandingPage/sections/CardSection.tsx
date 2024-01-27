import { Component, ReactNode } from "react";
import { StyledCardSection } from "./styles";
import Card from "../../../components/Cards/Cards";
import { dataApisCard } from "../../../apis/dataCards";

export default class CardSection extends Component {
  render(): ReactNode {
    return (
      <StyledCardSection>
        <h1>Hellow card section</h1>
        {/* {dataApisCard.map((cardData) => <Card key={cardData.id} data={cardData} />)} */}
        {dataApisCard.map((cardData, index) => (
          <Card key={index} data={cardData} index={index} />
        ))}
      </StyledCardSection>
    );
  }
}
