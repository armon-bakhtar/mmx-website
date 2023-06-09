import * as React from 'react';
import type { SVGProps } from 'react';
const SvgKiribati = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#kiribati_svg__a)">
      <g clipPath="url(#kiribati_svg__b)">
        <rect width={22} height={16} fill="#F93939" rx={2} />
        <path
          fill="#FFDA2C"
          d="M11 11.733c2.025 0 3.667-1.671 3.667-3.733 0-2.062-1.642-3.733-3.667-3.733S7.333 5.938 7.333 8c0 2.062 1.642 3.733 3.667 3.733Z"
        />
        <path
          fill="#232C80"
          fillRule="evenodd"
          d="M0 8.533h22V16H0V8.533Z"
          clipRule="evenodd"
        />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M0 8.533h22V9.6H0V8.533Zm0 2.134h22v1.066H0v-1.066ZM0 12.8h22v1.067H0V12.8Z"
          clipRule="evenodd"
        />
        <path
          fill="#FFDA2C"
          fillRule="evenodd"
          d="M8.38 2.133 11 3.2l2.619-1.067H8.381Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="kiribati_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="kiribati_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgKiribati;
