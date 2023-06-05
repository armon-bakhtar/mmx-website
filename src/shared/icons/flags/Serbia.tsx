import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSerbia = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#serbia_svg__a)">
      <g clipPath="url(#serbia_svg__b)">
        <rect width={22} height={16} fill="#1A47B8" rx={2} />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M0 11h22v5H0v-5Z"
          clipRule="evenodd"
        />
        <path
          fill="#F93939"
          fillRule="evenodd"
          d="M0 0h22v5.417H0V0Zm8.38 10.833V5.417H4.19v5.416C4.19 12.03 5.128 13 6.286 13c1.157 0 2.095-.97 2.095-2.167Z"
          clipRule="evenodd"
        />
        <path
          fill="#FFDA2C"
          fillRule="evenodd"
          d="M5.238 5.333 4.19 4.267S5.238 3.2 6.286 3.2c1.047 0 2.095 1.067 2.095 1.067L7.333 5.333H5.238Z"
          clipRule="evenodd"
        />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M5.238 6.4 4.19 7.467l2.096 1.066-1.048 2.134L6.286 12.8l1.047-2.133-1.047-2.134L8.38 7.467 7.333 6.4 6.286 7.467 5.238 6.4Z"
          clipRule="evenodd"
        />
        <path
          fill="#FFDA2C"
          fillRule="evenodd"
          d="M5.238 6.4H4.19v1.067L5.238 6.4Zm2.095 0h1.048v1.067L7.333 6.4Z"
          clipRule="evenodd"
        />
        <path
          fill="#A75835"
          fillRule="evenodd"
          d="M6.286 3.2 5.238 4.267l1.048 1.066 1.048-1.066L6.286 3.2Z"
          clipRule="evenodd"
        />
        <path
          fill="#88605F"
          fillRule="evenodd"
          d="M6.286 8.533 4.19 9.6h4.19L6.287 8.533Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="serbia_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="serbia_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSerbia;
