import { Component, ReactNode } from "react";
import { StyledLandingPage } from "./styles";
import { Navbar } from "../../components/Header/Navbar";

export default class LandingPage extends Component {
  render(): ReactNode {
    return (
      <StyledLandingPage>
        <Navbar />
        <h1>LandingPage</h1>
      </StyledLandingPage>
    );
  }
}
