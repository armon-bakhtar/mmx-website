import * as React from 'react';
import type { SVGProps } from 'react';
const SvgGhana = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#ghana_svg__a)">
      <g clipPath="url(#ghana_svg__b)">
        <rect width={22} height={16} fill="#FFDA2C" rx={2} />
        <path
          fill="#249F58"
          fillRule="evenodd"
          d="M0 11h22v5H0v-5Z"
          clipRule="evenodd"
        />
        <path
          fill="#F93939"
          fillRule="evenodd"
          d="M0 0h22v5H0V0Z"
          clipRule="evenodd"
        />
        <path
          fill="#151515"
          fillRule="evenodd"
          d="m11 9.333-1.54.825.293-1.746L8.51 7.174l1.721-.252.77-1.589.77 1.59 1.721.252-1.246 1.238.293 1.745"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="ghana_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="ghana_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGhana;
