import { Component, ReactNode } from "react";
import { StyledFigure } from "../styles";

interface UrlImgProps {
    urlImg:string;
}

export default class Figure extends Component<UrlImgProps> {
  render(): ReactNode {
    const { urlImg } = this.props;
    return <StyledFigure src={urlImg} alt="image" />;
  }
}
