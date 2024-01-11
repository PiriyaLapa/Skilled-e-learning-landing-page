import { Component, ReactNode } from "react";
import GlobalStyles from "./GlobalStyles";
import { theme, fonts } from './utilities';
import "./App.css";


export default class App extends Component {
  render(): ReactNode {
    return (
      <>
      <GlobalStyles theme={theme} fonts={fonts} />
      <div style={{ textAlign: "center" }}>
        
        <h1>
          skilled-e-learning-landing-page
        </h1>
        <h1>
          skilled-e-learning-landing-page
        </h1>
        <h1>
          skilled-e-learning-landing-page
        </h1>
        <h1>
          skilled-e-learning-landing-page
        </h1>
        <h1>
          skilled-e-learning-landing-page
        </h1>
        <h1>
          skilled-e-learning-landing-page
        </h1>
      </div>
      </>
    );
  }
}
