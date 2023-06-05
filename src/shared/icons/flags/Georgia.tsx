import * as React from 'react';
import type { SVGProps } from 'react';
const SvgGeorgia = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#georgia_svg__a)">
      <g clipPath="url(#georgia_svg__b)">
        <rect width={22} height={16} fill="#fff" rx={2} />
        <path
          fill="#F93939"
          fillRule="evenodd"
          d="M9.429 9.6H0V6.4h9.429V0h3.142v6.4H22v3.2h-9.429V16H9.43V9.6Z"
          clipRule="evenodd"
        />
        <path
          fill="#F93939"
          fillRule="evenodd"
          d="M15.714 11.733h-1.047V12.8h1.047v1.067h1.048V12.8h1.047v-1.067h-1.047v-1.066h-1.048v1.066Zm0-8.533h-1.047v1.067h1.047v1.066h1.048V4.267h1.047V3.2h-1.047V2.133h-1.048V3.2Zm-10.476 0H4.19v1.067h1.048v1.066h1.048V4.267h1.047V3.2H6.286V2.133H5.238V3.2Zm0 8.533H4.19V12.8h1.048v1.067h1.048V12.8h1.047v-1.067H6.286v-1.066H5.238v1.066Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="georgia_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="georgia_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGeorgia;
