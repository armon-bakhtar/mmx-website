import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDominica = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#dominica_svg__a)">
      <g clipPath="url(#dominica_svg__b)">
        <rect width={22} height={16} fill="#249F58" rx={2} />
        <path
          fill="#151515"
          fillRule="evenodd"
          d="M10.476 7.467H0v1.066h10.476V16h1.048V8.533H22V7.467H11.524V0h-1.048v7.467Z"
          clipRule="evenodd"
        />
        <path
          fill="#FFDA2C"
          fillRule="evenodd"
          d="M9.429 6.4v1.067h1.047V0H9.43v6.4H0v1.067h10.476V6.4H9.43Zm1.047 1.067H22V6.4H9.429v1.067h1.047V6.4H9.43V16h1.047V7.467Z"
          clipRule="evenodd"
        />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M12.571 9.6V8.533h-1.047V16h1.047V9.6H22V8.533H11.524V9.6h1.047ZM0 8.533h13.619V9.6H0V8.533ZM11.524 0h1.047v9.6h-1.047V0Z"
          clipRule="evenodd"
        />
        <path
          fill="#F93939"
          d="M11 11.733c2.025 0 3.667-1.671 3.667-3.733 0-2.062-1.642-3.733-3.667-3.733S7.333 5.938 7.333 8c0 2.062 1.642 3.733 3.667 3.733Z"
        />
        <path
          fill="#0A6A30"
          fillRule="evenodd"
          d="M9.429 6.4h1.047v1.067H9.43V6.4Zm2.095 0h1.048v1.067h-1.048V6.4Zm0 2.133h1.048V9.6h-1.048V8.533Zm-2.095 0h1.047V9.6H9.43V8.533Z"
          clipRule="evenodd"
        />
        <path
          fill="#955DCC"
          fillRule="evenodd"
          d="M10.476 6.4h1.048v2.133h-1.048V6.4Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="dominica_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="dominica_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDominica;
