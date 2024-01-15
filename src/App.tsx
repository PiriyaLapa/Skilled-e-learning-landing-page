import { Component, ReactNode } from "react";
import GlobalStyles from "./styles/GlobalStyles";
import { theme, fonts } from './utilities';
import LandingPage from "./pages/LandingPage/LandingPage";

export default class App extends Component {
  render(): ReactNode {
    return (
      <>
      <GlobalStyles theme={theme} fonts={fonts} />
        <LandingPage />
      </>
    );
  }
}
