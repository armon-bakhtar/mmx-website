import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPalau = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#palau_svg__a)">
      <rect width={22} height={16} fill="#3A99FF" rx={2} />
      <path fill="#FFDA2C" d="M10 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" />
    </g>
    <defs>
      <clipPath id="palau_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPalau;
