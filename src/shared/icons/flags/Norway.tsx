import * as React from 'react';
import type { SVGProps } from 'react';
const SvgNorway = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#norway_svg__a)">
      <g clipPath="url(#norway_svg__b)">
        <rect width={22} height={16} fill="#AF010D" rx={2} />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M6.286 9.6H0V6.4h6.286V0h3.143v6.4H22v3.2H9.429V16H6.286V9.6Z"
          clipRule="evenodd"
        />
        <path
          fill="#1A47B8"
          fillRule="evenodd"
          d="M7.333 8.533H0V7.467h7.333V0h1.048v7.467H22v1.066H8.38V16H7.334V8.533Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="norway_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="norway_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgNorway;
