import styled from "styled-components";

// StyledBtn
export const StyledPrimaryBtn = styled.button<{
  color: string;
  $hovercolor: string;
  width: string;
  height: string;
}>`

  &:hover {
    background-color:${(props) => props.$hovercolor};
    transition: 0.4s;
    border:none;
  }
  
  @media screen and (min-width: 375px) {
    background: ${(props) => props.color};
    border-radius: 28px;
    border: none;
    /* height: 56px;
    width: 140px; */
    width:${(props) => props.width};
    height:${(props) => props.height};
    color: white;
    font-weight: 600;
    float:left;
    margin: 10px 0px 10px 25px;
  }

  @media screen and (min-width:768px){
    margin: 10px 0px 10px 0;
    z-index:1
  }
`;
