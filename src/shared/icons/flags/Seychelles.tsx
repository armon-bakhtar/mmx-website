import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSeychelles = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#seychelles_svg__a)">
      <g clipPath="url(#seychelles_svg__b)">
        <rect width={22} height={16} fill="#FFDA2C" rx={2} />
        <path
          fill="#1A47B8"
          fillRule="evenodd"
          d="M0 16 9.429 0H0v16Z"
          clipRule="evenodd"
        />
        <path
          fill="#F93939"
          fillRule="evenodd"
          d="M0 16 16.762 0H22v4.267L0 16Z"
          clipRule="evenodd"
        />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="m0 16 22-6.4V4.267L0 16Z"
          clipRule="evenodd"
        />
        <path
          fill="#249F58"
          fillRule="evenodd"
          d="m0 16 22-6.4V16H0Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="seychelles_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="seychelles_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSeychelles;
