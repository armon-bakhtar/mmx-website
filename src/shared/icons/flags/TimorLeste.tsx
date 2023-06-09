import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTimorLeste = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#timor-leste_svg__a)">
      <rect width={22} height={16} fill="#F93939" rx={2} />
      <path
        fill="#FFDA2C"
        fillRule="evenodd"
        d="m0 0 14.667 8L0 16V0Z"
        clipRule="evenodd"
      />
      <path
        fill="#151515"
        fillRule="evenodd"
        d="m0 0 10.476 8L0 16V0Z"
        clipRule="evenodd"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="m3.667 9.333-1.54.825.293-1.746-1.245-1.238 1.722-.252.77-1.589.77 1.59 1.72.252-1.246 1.238.293 1.745"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="timor-leste_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTimorLeste;
