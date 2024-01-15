import { Component, ReactNode } from "react";
import { HeaderContent } from "../../../apis/apis";
import HeadLine from "../../../components/HeadLine/HeadLine";
import HeadContent from "../../../components/HeadContent/HeadContent";
import { theme } from "../../../utilities";

export default class Hero extends Component {
  render(): ReactNode {
    const { headLine, ParaContent } = HeaderContent;
    return (
      <div>
        <HeadLine message={headLine} />
        <HeadContent message={ParaContent} />
      </div>
    );
  }
}
