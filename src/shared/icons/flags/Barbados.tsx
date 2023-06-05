import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBarbados = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#barbados_svg__a)">
      <g clipPath="url(#barbados_svg__b)">
        <path
          fill="#FFDA2C"
          d="M19.905 0H2.095C.938 0 0 .955 0 2.133v11.734C0 15.045.938 16 2.095 16h17.81C21.062 16 22 15.045 22 13.867V2.133C22 .955 21.062 0 19.905 0Z"
        />
        <path
          fill="#1A47B8"
          fillRule="evenodd"
          d="M0 0h7v16H0V0Zm15 0h7v16h-7V0Z"
          clipRule="evenodd"
        />
        <path
          fill="#AE6A3E"
          fillRule="evenodd"
          d="M10.476 10.667h1.048v1.066h-1.048v-1.066Zm2.095-2.134h1.048V9.6h-1.048V8.533Zm-4.19 0h1.047V9.6H8.381V8.533Z"
          clipRule="evenodd"
        />
        <path
          fill="#151515"
          fillRule="evenodd"
          d="M11.524 8.533V4.267h-1.048v4.266H9.428V9.6h1.048v1.067h1.048V9.6h1.047V8.533h-1.047Zm1.047-3.2h1.048v3.2h-1.048v-3.2Zm-4.19 0h1.047v3.2H8.381v-3.2Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="barbados_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="barbados_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBarbados;
