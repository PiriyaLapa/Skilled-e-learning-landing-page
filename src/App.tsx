import { Component, ReactNode } from "react";
import GlobalStyles from "./GlobalStyles";
import { theme, fonts } from './utilities';
import LandingPage from './pages/LandingPage';
import "./App.css";



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
