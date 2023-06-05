import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSaintLucia = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#saint-lucia_svg__a)">
      <rect width={22} height={16} fill="#3ECBF8" rx={2} />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M6.286 13.867 11 2.133l4.714 11.734H6.286Z"
        clipRule="evenodd"
      />
      <path
        fill="#151515"
        fillRule="evenodd"
        d="M7.333 13.867 11 4.267l3.667 9.6H7.334Z"
        clipRule="evenodd"
      />
      <path
        fill="#FFDA2C"
        fillRule="evenodd"
        d="M6.286 13.867 11 8.533l4.714 5.334H6.286Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="saint-lucia_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSaintLucia;
