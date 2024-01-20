import { Component, ReactNode } from "react";
import { DataScore } from "./interface";
// import { DataScore } from "./interface";

// interface DataProps {
//   data: {
//     dataMember: {
//       title: string;
//       score: string;
//     };
//     dataCourse: {
//       title: string;
//       score: string;
//     };
//   };
// }

interface DataProps {
  data: DataScore;
}
export default class MemberBox extends Component<DataProps> {
  render(): ReactNode {
    const { data } = this.props;
    return (
      <div>
        <h1>{data.dataMember.title}</h1>
        <h1>{data.dataMember.score}</h1>
        <h1>{data.dataCourse.score}</h1>
      </div>
    );
  }
}
