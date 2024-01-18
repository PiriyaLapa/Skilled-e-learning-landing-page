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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            doloribus dolorum deleniti maxime. Doloremque, unde ipsum minus
            repudiandae consectetur delectus, praesentium voluptatibus nostrum
            dolores rem ut quo eum aliquid deleniti dolor aut! Aspernatur ullam,
            culpa labore, vel porro molestias dicta molestiae dignissimos earum
            facilis fugiat sequi. Nesciunt tenetur corporis ratione?
          </p>
        </section>
      </StyledLandingPage>
    );
  }
}
