import * as React from 'react';
import type { SVGProps } from 'react';
const SvgGuyana = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#guyana_svg__a)">
      <g clipPath="url(#guyana_svg__b)">
        <rect width={22} height={16} fill="#249F58" rx={2} />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M0 16V0h3.143L22 6.4v3.2L3.143 16H0Z"
          clipRule="evenodd"
        />
        <path
          fill="#FFDA2C"
          fillRule="evenodd"
          d="m0 0 22 8-22 8V0Z"
          clipRule="evenodd"
        />
        <path
          fill="#151515"
          fillRule="evenodd"
          d="M0 16V0h1.048l10.476 8-10.476 8H0Z"
          clipRule="evenodd"
        />
        <path
          fill="#F93939"
          fillRule="evenodd"
          d="m0 0 10.476 8L0 16V0Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="guyana_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="guyana_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGuyana;
