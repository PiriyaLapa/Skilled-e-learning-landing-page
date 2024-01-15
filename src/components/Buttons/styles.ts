import styled from "styled-components";

// StyledBtn
export const StyledPrimaryBtn = styled.button<{ color: string }>`
  &:hover {
    background-color:${(props) => props.color};
    transition: 0.4s;
    border:none;
  }
  
  @media screen and (min-width: 375px) {
    background: ${(props) => props.color};
    border-radius: 28px;
    border: none;
    height: 56px;
    width: 140px;
    color: white;
    font-weight: 600;
    position: relative;
    right: 0;
    top: 50%;
    transform: translateY(16%);
  }
`;
