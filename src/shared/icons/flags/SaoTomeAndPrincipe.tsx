import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSaoTomeAndPrincipe = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#sao-tome-and-principe_svg__a)">
      <g clipPath="url(#sao-tome-and-principe_svg__b)">
        <rect width={22} height={16} fill="#FFDA2C" rx={2} />
        <path
          fill="#00B731"
          fillRule="evenodd"
          d="M0 11.733V16h22v-4.267H0ZM0 0v4.267h22V0H0Z"
          clipRule="evenodd"
        />
        <path
          fill="#F93939"
          fillRule="evenodd"
          d="M0 0v16.035L7.333 8 0 0Z"
          clipRule="evenodd"
        />
        <path
          fill="#151515"
          fillRule="evenodd"
          d="m11 8.981-1.2.644.23-1.36-.97-.964 1.34-.197.6-1.237.599 1.237 1.341.197-.97.964.23 1.36L11 8.98Zm6.285 0-1.199.644.23-1.36-.97-.964 1.34-.197.6-1.237.599 1.237 1.34.197-.97.964.231 1.36"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="sao-tome-and-principe_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="sao-tome-and-principe_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSaoTomeAndPrincipe;
