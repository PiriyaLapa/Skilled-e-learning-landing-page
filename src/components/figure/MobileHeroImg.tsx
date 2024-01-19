import { Component, ReactNode } from "react";

interface urlImgProps{
    urlImg:string;
}

export default class MobileHeroImg extends Component<urlImgProps> {
  render(): ReactNode {
    return (
      <div >
        <img src={this.props.urlImg} alt=""  /> 
      </div>
    );
  }
}
