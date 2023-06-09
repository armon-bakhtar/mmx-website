import * as React from 'react';
import type { SVGProps } from 'react';
const SvgEcuador = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#ecuador_svg__a)">
      <g clipPath="url(#ecuador_svg__b)">
        <path
          fill="#1A47B8"
          d="M19.905 0H2.095C.938 0 0 .955 0 2.133v11.734C0 15.045.938 16 2.095 16h17.81C21.062 16 22 15.045 22 13.867V2.133C22 .955 21.062 0 19.905 0Z"
        />
        <path
          fill="#F93939"
          fillRule="evenodd"
          d="M0 12h22v4H0v-4Z"
          clipRule="evenodd"
        />
        <path
          fill="#FFDA2C"
          fillRule="evenodd"
          d="M0 0h22v8H0V0Z"
          clipRule="evenodd"
        />
        <path
          fill="#151515"
          fillRule="evenodd"
          d="M6.286 4.267h3.143l1.57 1.066 1.572-1.066h3.143l-3.143 1.066L11.524 6.4h-1.048L9.428 5.333 6.287 4.267Z"
          clipRule="evenodd"
        />
        <path
          fill="#3ECBF8"
          d="M11 10.667c.868 0 1.572-.955 1.572-2.134 0-1.178-.704-2.133-1.572-2.133-.868 0-1.571.955-1.571 2.133 0 1.179.703 2.134 1.571 2.134Z"
        />
        <path
          fill="#FFDA2C"
          fillRule="evenodd"
          d="M8.381 7.467V9.6l2.095 1.067h1.048L13.619 9.6V7.467L14.667 9.6l-1.048 1.067-2.095 1.066h-1.048l-2.095-1.066L7.333 9.6l1.048-2.133Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="ecuador_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="ecuador_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgEcuador;
