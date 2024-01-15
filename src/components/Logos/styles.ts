import styled from "styled-components";
import {theme} from '../../utilities';

// StyleLogo
export const StyledLogo = styled.h1<{theme:typeof theme}>`
  font-size: 28px;
  font-style: normall;
  font-weight: 800;
  line-height: normall;
  text-align: center;
  display: relative;
  color:${(props) => props.theme.secondColor};
`;