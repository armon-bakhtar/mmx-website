import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMalawi = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#malawi_svg__a)">
      <g clipPath="url(#malawi_svg__b)">
        <rect width={22} height={16} fill="#F93939" rx={2} />
        <path
          fill="#249F58"
          fillRule="evenodd"
          d="M0 11h22v5H0v-5Z"
          clipRule="evenodd"
        />
        <path
          fill="#151515"
          fillRule="evenodd"
          d="M0 0h22v5H0V0Z"
          clipRule="evenodd"
        />
        <path
          fill="#F93939"
          fillRule="evenodd"
          d="M14.92 4.267A4.688 4.688 0 0 0 11 2.133a4.688 4.688 0 0 0-3.92 2.134h7.84Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="malawi_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="malawi_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMalawi;
