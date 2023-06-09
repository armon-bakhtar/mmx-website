import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLiechtenstein = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#liechtenstein_svg__a)">
      <rect width={22} height={16} fill="#F93939" rx={2} />
      <path
        fill="#1A47B8"
        fillRule="evenodd"
        d="M0 0h22v8H0V0Z"
        clipRule="evenodd"
      />
      <path
        fill="#D4AF2C"
        fillRule="evenodd"
        d="M4.19 5.333h4.19V6.4H4.19V5.333Z"
        clipRule="evenodd"
      />
      <path
        fill="#FFDA2C"
        fillRule="evenodd"
        d="M5.249 3.351A4.213 4.213 0 0 0 4.19 3.2c-1.048 0-1.048.533-1.048 1.067 0 .533 1.048 1.066 1.048 1.066h4.19S9.43 4.8 9.43 4.267c0-.534 0-1.067-1.048-1.067-.367 0-.735.066-1.058.151a1.058 1.058 0 0 0-1.037-1.218 1.058 1.058 0 0 0-1.037 1.218Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="liechtenstein_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLiechtenstein;
