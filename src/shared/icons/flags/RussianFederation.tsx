import * as React from 'react';
import type { SVGProps } from 'react';
const SvgRussianFederation = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#russian-federation_svg__a)">
      <g clipPath="url(#russian-federation_svg__b)">
        <rect width={22} height={16} fill="#1A47B8" rx={2} />
        <path
          fill="#F93939"
          fillRule="evenodd"
          d="M0 10.667h22V16H0v-5.333Z"
          clipRule="evenodd"
        />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M0 0h22v5.333H0V0Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="russian-federation_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="russian-federation_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRussianFederation;
