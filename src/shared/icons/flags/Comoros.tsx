import * as React from 'react';
import type { SVGProps } from 'react';
const SvgComoros = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#comoros_svg__a)">
      <g clipPath="url(#comoros_svg__b)">
        <rect width={22} height={16} fill="#fff" rx={2} />
        <path
          fill="#FFDA2C"
          fillRule="evenodd"
          d="M0 0h22v4H0V0Z"
          clipRule="evenodd"
        />
        <path
          fill="#F93939"
          fillRule="evenodd"
          d="M0 8h22v4H0V8Z"
          clipRule="evenodd"
        />
        <path
          fill="#232C80"
          fillRule="evenodd"
          d="M0 12h22v4H0v-4Z"
          clipRule="evenodd"
        />
        <path
          fill="#00B731"
          fillRule="evenodd"
          d="m0 0 12.571 8L0 16V0Z"
          clipRule="evenodd"
        />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M6.286 11.563a2.81 2.81 0 0 1-.967.17c-1.781 0-3.224-1.671-3.224-3.733 0-2.062 1.444-3.733 3.224-3.733.337 0 .662.06.967.17C4.978 4.913 4.029 6.33 4.029 8c0 1.671.95 3.087 2.257 3.563Zm0-6.23h1.047V6.4H6.286V5.333Zm0 2.134h1.047v1.066H6.286V7.467Zm0 2.133h1.047v1.067H6.286V9.6Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="comoros_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="comoros_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgComoros;
