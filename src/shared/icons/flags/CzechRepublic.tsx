import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCzechRepublic = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#czech-republic_svg__a)">
      <g clipPath="url(#czech-republic_svg__b)">
        <rect width={22} height={16} fill="#F93939" rx={2} />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M0 0h22v8H0V0Z"
          clipRule="evenodd"
        />
        <path
          fill="#1A47B8"
          fillRule="evenodd"
          d="m0 0 10.476 8L0 16V0Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="czech-republic_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="czech-republic_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCzechRepublic;
