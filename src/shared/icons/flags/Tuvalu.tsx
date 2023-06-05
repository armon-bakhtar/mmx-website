import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTuvalu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#tuvalu_svg__a)">
      <rect width={22} height={16} fill="#3A99FF" rx={2} />
      <path
        fill="#FFDA2C"
        fillRule="evenodd"
        d="M14.667 5.333V6.4h1.047V5.333h-1.047Zm3.142 0V6.4h1.048V5.333h-1.048Zm-5.238 3.2V9.6h1.048V8.533h-1.048Zm4.19 1.067v1.067h1.048V9.6h-1.047Zm-4.19 2.133V12.8h1.048v-1.067h-1.048Zm-4.19-1.066v1.066h1.047v-1.066H8.381Z"
        clipRule="evenodd"
      />
      <path
        fill="#fff"
        d="M9.429 1.067H2.095c-.578 0-1.047.477-1.047 1.066v5.334c0 .589.469 1.066 1.047 1.066H9.43c.578 0 1.047-.477 1.047-1.066V2.133c0-.589-.469-1.066-1.047-1.066Z"
      />
      <path
        fill="#F93939"
        fillRule="evenodd"
        d="M5.238 5.333H2.095V4.267h3.143V2.133h1.048v2.134h3.143v1.066H6.286v2.134H5.238V5.333ZM7.858 6.4v1.067h1.57V6.4h-1.57Zm0-4.267V3.2h1.57V2.133h-1.57ZM2.094 6.4v1.067h1.572V6.4H2.095Zm0-4.267V3.2h1.572V2.133H2.095Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="tuvalu_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTuvalu;
