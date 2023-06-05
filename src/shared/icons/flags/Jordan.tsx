import * as React from 'react';
import type { SVGProps } from 'react';
const SvgJordan = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#jordan_svg__a)">
      <g clipPath="url(#jordan_svg__b)">
        <rect width={22} height={16} fill="#fff" rx={2} />
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
          d="M0 0v16l14-8.018L0 0Z"
          clipRule="evenodd"
        />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="m3 8 1-.667L4.5 6 5 7.333 6 8l-1 .667L4.5 10 4 8.667 3 8Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="jordan_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="jordan_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgJordan;
