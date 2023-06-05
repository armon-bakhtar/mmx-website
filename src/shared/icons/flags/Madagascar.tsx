import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMadagascar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#madagascar_svg__a)">
      <g clipPath="url(#madagascar_svg__b)">
        <rect width={22} height={16} fill="#F93939" rx={2} />
        <path
          fill="#249F58"
          fillRule="evenodd"
          d="M0 9h22v7H0V9Z"
          clipRule="evenodd"
        />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M0 0h8v16H0V0Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="madagascar_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="madagascar_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMadagascar;
