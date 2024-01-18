import { Component, ReactNode } from "react";
import { StyledLandingPage } from "./styles";
import Header from "./sections/Header";
import Hero from "./sections/Hero";

export default class LandingPage extends Component {
  render(): ReactNode {
    return (
      <StyledLandingPage>
        <Header />
        <Hero />
        <section>
          <h1>Card section</h1>
          <h1>Card section</h1>
          <h1>Card section</h1>
          <h1>Card section</h1>
          <h1>Card section</h1>
          <h1>Card section</h1>
        </section>
      </StyledLandingPage>
    );
  }
}
