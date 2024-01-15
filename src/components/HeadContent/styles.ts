import styled from "styled-components";
import { theme } from "../../utilities";

export const StyledHeadContent = styled.div<{ theme: typeof theme }>`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
  color: ${(props) => props.theme.thirdColor};
  text-align:left;
  padding:5px 25px;
`;
