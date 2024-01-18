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
        <section>Test section
          <h1>น้องปอนด์ เด็ก VIP</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
        </section>
      </StyledLandingPage>);
  }
}
