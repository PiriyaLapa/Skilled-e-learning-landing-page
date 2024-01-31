import { Component, ReactNode } from "react";
import { StyledLandingPage } from "./styles";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import CardSection from "./sections/CardSection";
import Footer from '../../components/Footer/Footer';

export default class LandingPage extends Component {
  state = {
    windowWidthState: window.innerWidth,
  };

  updateWindowWidth = () => {
    this.setState({
      windowWidthState: window.innerWidth, // Corrected property name
    });
  };

  componentDidMount(): void {
    window.addEventListener("resize", this.updateWindowWidth);
  }

  componentWillUnmount(): void {
    window.removeEventListener("resize", this.updateWindowWidth);
  }

  render(): ReactNode {
    const { windowWidthState } = this.state;
    return (
      <StyledLandingPage>
        <Header windowWidthState={windowWidthState} />
        <Hero windowWidthState={windowWidthState} />
        <CardSection />
        <Footer windowWidthState={windowWidthState} />
      </StyledLandingPage>
    );
  }
}
