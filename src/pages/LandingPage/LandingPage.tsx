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
          <h1>Card section test</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            eos odit esse quasi libero delectus reprehenderit facilis nulla
            tenetur. Reiciendis laboriosam itaque omnis nostrum nihil
            consectetur veritatis consequatur aut fuga esse totam commodi
            veniam, nemo dolorem voluptatem tempora cum est. Officia eligendi
            quos optio? Repudiandae architecto non facilis id doloribus.
          </p>
          <div style={{ position: "absolute", top: "50%", left: "90%" }}>
            <svg
              width="500px"
              height="50%"
              viewBox="0 0 317 560"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="317"
                height="560"
                rx="158.5"
                fill="url(#paint0_linear_0_543)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_0_543"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="560"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FF6F48" />
                  <stop offset="1" stop-color="#F02AA6" />
                </linearGradient>
              </defs>
            </svg>
            {/* text Hero picture for png to svg */}
          </div>
        </section>
      </StyledLandingPage>
    );
  }
}
