import { Component, ReactNode } from "react";
import { StyledLandingPage } from "./styles";
import Header from "./sections/Header";
import Hero from "./sections/Hero";

export default class LandingPage extends Component {
  state = {
    windowWidthState: window.innerWidth,
  };

  updateWindowWidth = () => {
    this.setState({
      windowWidth: window.innerWidth,
    });
  };

  componentDidMount(): void {
    window.addEventListener("resize", this.updateWindowWidth);
  }

  componentWillUnmount(): void {
    window.removeEventListener("resize", this.updateWindowWidth);
  }

  render(): ReactNode {
    const {windowWidthState} = this.state;
    return (
      <StyledLandingPage>
        <Header />
        <Hero windowWidthState={windowWidthState} />
        <section>
          <h1>Card section test</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            eos odit esse quasi libero delectus reprehenderit facilis nulla
            tenetur. Reiciendis laboriosam itaque omnis nostrum nihil
            consectetur veritatis consequatur aut fuga esse totam commodi
            veniam, nemo dolorem voluptatem tempora cum est. Officia eligendi
            quos optio? Repudiandae architecto non facilis id doloribus.
          </p>
        </section>
      </StyledLandingPage>
    );
  }
}
