import { Component, ReactNode } from "react";
import { DataProps } from "../interface";
import { StyledCourseBox } from "../styles";
import { theme } from "../../../utilities";

export default class CourseBox extends Component<DataProps> {
  render(): ReactNode {
    const { title, score} = this.props.data.dataCourse;
    const {thirdColor} = theme;
    return (
        <StyledCourseBox color={thirdColor}>
           <span>{title}</span> 
           <p>{score}</p>
        </StyledCourseBox>
    );
  }
}
