import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPortugal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#portugal_svg__a)">
      <rect width={22} height={16} fill="#F93939" rx={2} />
      <path
        fill="#249F58"
        fillRule="evenodd"
        d="M0 0h7v16H0V0Z"
        clipRule="evenodd"
      />
      <path
        fill="#FFDA2C"
        d="M7.333 10.667c1.736 0 3.143-1.433 3.143-3.2 0-1.768-1.407-3.2-3.143-3.2-1.735 0-3.143 1.432-3.143 3.2 0 1.767 1.408 3.2 3.143 3.2Z"
      />
      <path
        fill="#F93939"
        fillRule="evenodd"
        d="M9.429 8.533v-3.2h-4.19v3.2c0 .59.937 1.067 2.095 1.067 1.157 0 2.095-.478 2.095-1.067Z"
        clipRule="evenodd"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M6.286 6.4H8.38v2.133H6.286V6.4Z"
        clipRule="evenodd"
      />
      <path
        fill="#1A47B8"
        fillRule="evenodd"
        d="M6.286 6.4h1.047v1.067H6.286V6.4Zm1.047 1.067h1.048v1.066H7.333V7.467Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="portugal_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPortugal;
