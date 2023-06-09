import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMarshallIslands = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#marshall-islands_svg__a)">
      <g clipPath="url(#marshall-islands_svg__b)">
        <rect width={22} height={16} fill="#1A47B8" rx={2} />
        <path
          fill="#fff"
          d="M5.238 7.467c1.157 0 2.096-.955 2.096-2.134 0-1.178-.939-2.133-2.096-2.133s-2.095.955-2.095 2.133c0 1.179.938 2.134 2.095 2.134Z"
        />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="m0 16 22-9.6V3.2L0 16Z"
          clipRule="evenodd"
        />
        <path
          fill="#FF6C2D"
          fillRule="evenodd"
          d="M0 16 22 0v3.2L0 16Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="marshall-islands_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="marshall-islands_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMarshallIslands;
