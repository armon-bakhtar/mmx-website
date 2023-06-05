import * as React from 'react';
import type { SVGProps } from 'react';
const SvgUganda = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#uganda_svg__a)">
      <g clipPath="url(#uganda_svg__b)">
        <rect width={22} height={16} fill="#FFDA2C" rx={2} />
        <path
          fill="#151515"
          fillRule="evenodd"
          d="M0 0h22v2.133H0V0Z"
          clipRule="evenodd"
        />
        <path
          fill="#F93939"
          fillRule="evenodd"
          d="M0 4.267h22v3.2H0v-3.2Z"
          clipRule="evenodd"
        />
        <path
          fill="#151515"
          fillRule="evenodd"
          d="M0 7.467h22v3.2H0v-3.2Z"
          clipRule="evenodd"
        />
        <path
          fill="#fff"
          d="M10.476 10.667c1.736 0 3.143-1.433 3.143-3.2 0-1.768-1.407-3.2-3.143-3.2-1.735 0-3.143 1.432-3.143 3.2 0 1.767 1.408 3.2 3.143 3.2Z"
        />
        <path
          fill="#151515"
          fillRule="evenodd"
          d="m10.476 4.267-1.047 3.2L10.476 9.6l1.048-2.133v3.2l1.048-3.2L11.524 6.4l-1.048 1.067v-3.2Z"
          clipRule="evenodd"
        />
        <path fill="#F93939" d="M0 12.8h22V16H0z" />
      </g>
    </g>
    <defs>
      <clipPath id="uganda_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="uganda_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgUganda;
