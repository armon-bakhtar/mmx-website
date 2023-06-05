import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMoldova = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#moldova_svg__a)">
      <g clipPath="url(#moldova_svg__b)">
        <rect width={22} height={16} fill="#FFDA2C" rx={2} />
        <path
          fill="#1A47B8"
          fillRule="evenodd"
          d="M0 0h8v16H0V0Z"
          clipRule="evenodd"
        />
        <path
          fill="#AE6A3E"
          fillRule="evenodd"
          d="M9 5.125h5v5.625H9V5.125Zm0 5.625L11.5 13l2.5-2.25H9ZM11 4h1v1.125h-1V4Z"
          clipRule="evenodd"
        />
        <path
          fill="#AF010D"
          fillRule="evenodd"
          d="M10 6h3v3h-3V6Z"
          clipRule="evenodd"
        />
        <path
          fill="#1A47B8"
          fillRule="evenodd"
          d="M10 9h3v1.2h-3V9Zm0 1.2 1.5.8 1.5-.8h-3Z"
          clipRule="evenodd"
        />
        <path
          fill="#FFDA2C"
          fillRule="evenodd"
          d="M11.5 7c.276 0 .5.321.5.758v1.484c0 .42-.232.758-.5.758-.276 0-.5-.321-.5-.758V7.757c0-.42.232-.757.5-.757Z"
          clipRule="evenodd"
        />
        <path
          fill="#AF010D"
          fillRule="evenodd"
          d="M15 0h8v16h-8V0Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="moldova_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="moldova_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMoldova;
