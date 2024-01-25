import styled from "styled-components";
import { theme } from "../../utilities";

export const StyledHeadLine = styled.span<{ theme: typeof theme }>`
  color: ${(props) => props.theme.secondColor};
  font-size: 40px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;

  // Moblie screen
  @media screen and (min-width: 375px) {
    font-size: 40px;
    display: block;
    text-align: left;
    padding: 25px 22px;
  }

  // Tablap screen
  @media screen and (min-width: 768px) {
    font-size: 56px;
    width: 62%;
    margin: 0;
    padding: 0;
  }

  @media screen and (min-width:1440px) {
    font-size: 56px;
  }
`;
