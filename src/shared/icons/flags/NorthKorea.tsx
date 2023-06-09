import * as React from 'react';
import type { SVGProps } from 'react';
const SvgNorthKorea = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#north-korea_svg__a)">
      <rect width={22} height={16} fill="#1A47B8" rx={2} />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M0 3.2h22v1.067H0V3.2Z"
        clipRule="evenodd"
      />
      <path
        fill="#F93939"
        fillRule="evenodd"
        d="M0 4.267h22v7.466H0V4.267Z"
        clipRule="evenodd"
      />
      <path
        fill="#fff"
        d="M5.762 10.667c1.447 0 2.62-1.194 2.62-2.667 0-1.473-1.173-2.667-2.62-2.667-1.446 0-2.619 1.194-2.619 2.667 0 1.473 1.173 2.667 2.62 2.667Z"
      />
      <path
        fill="#F93939"
        fillRule="evenodd"
        d="m5.76 9.041-1.257.672.24-1.424-1.015-1.007 1.403-.208.629-1.295.628 1.296 1.404.21-1.016 1.007.241 1.425"
        clipRule="evenodd"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M0 11.733h22V12.8H0v-1.067Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="north-korea_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgNorthKorea;
