import { Component, ReactNode } from "react";
import { StyledPhographIcon } from "./styleds";

export default class PhotographIcon extends Component {
  render(): ReactNode {
    return (
      <StyledPhographIcon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
        >
          <circle cx="28" cy="28" r="28" fill="url(#paint0_linear_0_39)" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 18L23.17 20H20C18.9 20 18 20.9 18 22V34C18 35.1 18.9 36 20 36H36C37.1 36 38 35.1 38 34V22C38 20.9 37.1 20 36 20H32.83L31 18H25ZM31.2 28C31.2 29.7673 29.7673 31.2 28 31.2C26.2327 31.2 24.8 29.7673 24.8 28C24.8 26.2327 26.2327 24.8 28 24.8C29.7673 24.8 31.2 26.2327 31.2 28ZM23 28C23 30.76 25.24 33 28 33C30.76 33 33 30.76 33 28C33 25.24 30.76 23 28 23C25.24 23 23 25.24 23 28Z"
            fill="white"
          />
          <mask
            id="mask0_0_39"
            // style="mask-type:luminance"
            maskUnits="userSpaceOnUse"
            x="18"
            y="18"
            width="20"
            height="18"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M25 18L23.17 20H20C18.9 20 18 20.9 18 22V34C18 35.1 18.9 36 20 36H36C37.1 36 38 35.1 38 34V22C38 20.9 37.1 20 36 20H32.83L31 18H25ZM31.2 28C31.2 29.7673 29.7673 31.2 28 31.2C26.2327 31.2 24.8 29.7673 24.8 28C24.8 26.2327 26.2327 24.8 28 24.8C29.7673 24.8 31.2 26.2327 31.2 28ZM23 28C23 30.76 25.24 33 28 33C30.76 33 33 30.76 33 28C33 25.24 30.76 23 28 23C25.24 23 23 25.24 23 28Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0_0_39)"></g>
          <defs>
            <linearGradient
              id="paint0_linear_0_39"
              x1="0"
              y1="0"
              x2="0"
              y2="56"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF6F48" />
              <stop offset="1" stopColor="#F02AA6" />
            </linearGradient>
          </defs>
        </svg>
      </StyledPhographIcon>
    );
  }
}
