import React from "react";

const FintechSVG = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="15rem"
    height="5rem"
    viewBox="0 0 320 110"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#glow)">
      <circle cx="38" cy="54" r="22" stroke="blue" strokeWidth="3" fill="none" />
      <path
        d="M16 54 Q60 10 120 54 Q200 120 320 80"
        stroke="blue"
        strokeWidth="1.5"
        fill="none"
        opacity="0.5"
      />
      <text
        x="60"
        y="65"
        fontFamily="Arial"
        fontSize="36"
        fontWeight="bold"
        fill="blue"
        style={{ filter: "drop-shadow(0 0 8px red)" }}
      >
        Luck
      </text>
      <text
        x="145"
        y="65"
        fontFamily="Arial"
        fontSize="36"
        fontWeight="bold"
        fill="red"
        style={{ filter: "drop-shadow(0 0 8px blue)" }}
      >
        Tech
      </text>
      <circle cx="260" cy="35" r="2.5" fill="blue" />
      <circle cx="275" cy="25" r="2.5" fill="red" />
      <circle cx="270" cy="50" r="2.5" fill="blue" />
    </g>
    <defs>
      <filter
        id="glow"
        x="0"
        y="0"
        width="2 rem"
        height="1 rem"
        filterUnits="userSpaceOnUse"
      >
        <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  </svg>
);

export default FintechSVG;
