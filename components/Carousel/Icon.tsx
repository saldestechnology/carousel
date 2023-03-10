import React from "react";

interface IconProps {
  direction: boolean;
}

const Icon = ({ direction }: IconProps) =>
  direction ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="none"
      viewBox="0 0 40 40"
    >
      <path
        fill="#fff"
        stroke="#333"
        d="M20 1.5c10.217 0 18.5 8.283 18.5 18.5S30.217 38.5 20 38.5 1.5 30.217 1.5 20 9.783 1.5 20 1.5Z"
      />
      <path
        stroke="#333"
        d="m17.672 26.896 7.065-7.065a.25.25 0 1 1 .354.354l-7.065 7.064a.25.25 0 0 1-.354-.353Z"
      />
      <path
        stroke="#333"
        d="m24.725 20.16-7.054-7.053a.25.25 0 1 1 .354-.354l7.053 7.054a.25.25 0 1 1-.353.353Z"
      />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="none"
      viewBox="0 0 40 40"
    >
      <path
        fill="#fff"
        stroke="#333"
        d="M20 1.5C9.783 1.5 1.5 9.783 1.5 20S9.783 38.5 20 38.5 38.5 30.217 38.5 20 30.217 1.5 20 1.5Z"
      />
      <path
        stroke="#333"
        d="m22.328 26.896-7.065-7.065a.25.25 0 1 0-.354.354l7.065 7.064a.25.25 0 0 0 .354-.353Z"
      />
      <path
        stroke="#333"
        d="m15.275 20.16 7.054-7.053a.25.25 0 1 0-.354-.354l-7.054 7.054a.25.25 0 1 0 .354.353Z"
      />
    </svg>
  );

export default Icon;
