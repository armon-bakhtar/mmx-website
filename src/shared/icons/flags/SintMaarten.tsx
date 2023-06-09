import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSintMaarten = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#sint-maarten_svg__a)">
      <g clipPath="url(#sint-maarten_svg__b)">
        <rect width={22} height={16} fill="#1A47B8" rx={2} />
        <path fill="#F93939" d="M22 0H0v8h22V0Z" />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="m0 0 10.476 8L0 16V0Z"
          clipRule="evenodd"
        />
        <path
          fill="#AE6A3E"
          fillRule="evenodd"
          d="M1.048 5.333h2.095L4.191 6.4l1.047-1.067h2.096L5.238 6.4H3.143L1.048 5.333Z"
          clipRule="evenodd"
        />
        <path
          fill="#3ECBF8"
          d="M4.19 10.667c.58 0 1.048-.955 1.048-2.134 0-1.178-.469-2.133-1.047-2.133-.579 0-1.048.955-1.048 2.133 0 1.179.47 2.134 1.048 2.134Z"
        />
        <path
          fill="#FFDA2C"
          fillRule="evenodd"
          d="M3.143 7.467V9.6H5.238V7.467L6.286 9.6l-1.048 1.067H3.143L2.095 9.6l1.048-2.133Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="sint-maarten_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="sint-maarten_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSintMaarten;
