import { Component, ReactNode } from "react";
import { StyledLandingPage } from "./styles";
import Header from "./sections/Header";

export default class LandingPage extends Component {
  render(): ReactNode {
    return (
      <StyledLandingPage>
        <Header />
      </StyledLandingPage>);
  }
}
