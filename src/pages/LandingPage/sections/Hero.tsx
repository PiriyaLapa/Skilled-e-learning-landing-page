import { Component, ReactNode } from "react";
import { HeaderContent } from "../../../apis/apis";
import HeadLine from "../../../components/HeadLine/HeadLine";

export default class Hero extends Component {
  render(): ReactNode {
    const {headLine} = HeaderContent;
    return (
      <div>
        <HeadLine message={headLine}/>
      </div>
    );
  }
}
