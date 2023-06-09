import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCapeVerde = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#cape-verde_svg__a)">
      <rect width={22} height={16} fill="#1A47B8" rx={2} />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M0 8.533h22V9.6H0V8.533Z"
        clipRule="evenodd"
      />
      <path
        fill="#F93939"
        fillRule="evenodd"
        d="M0 9.6h22v1.067H0V9.6Z"
        clipRule="evenodd"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M0 10.667h22v1.066H0v-1.066Z"
        clipRule="evenodd"
      />
      <path
        fill="#FFDA2C"
        fillRule="evenodd"
        d="M5.238 7.467h1.048v1.066H5.238V7.467ZM7.333 6.4h1.048v1.067H7.333V6.4ZM9.43 7.467h1.047v1.066H9.43V7.467ZM10.476 9.6h1.048v1.067h-1.048V9.6Zm-6.286 0h1.048v1.067H4.19V9.6Zm5.239 2.133h1.047V12.8H9.43v-1.067ZM7.333 12.8h1.048v1.067H7.333V12.8Zm-2.095-1.067h1.048V12.8H5.238v-1.067Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="cape-verde_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCapeVerde;
