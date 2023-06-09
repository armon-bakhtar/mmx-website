import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHaiti = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#haiti_svg__a)">
      <rect width={22} height={16} fill="#F93939" rx={2} />
      <path
        fill="#1A47B8"
        fillRule="evenodd"
        d="M0 0h22v8H0V0Z"
        clipRule="evenodd"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M6.286 5.333h8.73v5.334h-8.73V5.333Z"
        clipRule="evenodd"
      />
      <path
        fill="#FFDA2C"
        fillRule="evenodd"
        d="M9.778 7.111h1.746v3.556H9.778V7.11Z"
        clipRule="evenodd"
      />
      <path
        fill="#249F58"
        fillRule="evenodd"
        d="M8.032 8c0-1.472 1.163-2.667 2.619-2.667 1.446 0 2.619 1.184 2.619 2.667v2.667H8.032V8Zm1.746.009c0-.498.405-.898.873-.898.482 0 .873.38.873.898v2.658H9.778V8.009Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="haiti_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHaiti;
