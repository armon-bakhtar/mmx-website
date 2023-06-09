import * as React from 'react';
import type { SVGProps } from 'react';
const SvgThailand = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#thailand_svg__a)">
      <g clipPath="url(#thailand_svg__b)">
        <rect width={22} height={16} fill="#fff" rx={2} />
        <path
          fill="#F93939"
          fillRule="evenodd"
          d="M0 0h22v3.2H0V0Zm0 12.8h22V16H0v-3.2Z"
          clipRule="evenodd"
        />
        <path
          fill="#232C80"
          fillRule="evenodd"
          d="M0 5.333h22v5.334H0V5.333Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="thailand_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="thailand_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgThailand;
