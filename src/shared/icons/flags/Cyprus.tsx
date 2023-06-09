import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCyprus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#cyprus_svg__a)">
      <rect width={22} height={16} fill="#fff" rx={2} />
      <path
        fill="#FF6C2D"
        fillRule="evenodd"
        d="M5.238 6.4s1.048 3.2 4.19 3.2c3.144 0 6.286-3.2 6.286-3.2H13.62l3.143-3.2-6.286 2.133L8.381 3.2 7.334 5.333 5.238 6.4Z"
        clipRule="evenodd"
      />
      <path
        fill="#0A6A30"
        fillRule="evenodd"
        d="m5.238 9.6 5.238 2.133V12.8L4.19 10.667 5.238 9.6Zm11.524 0-5.238 2.133V12.8l6.286-2.133L16.761 9.6Zm-6.286 2.133h1.048v2.134h-1.048v-2.134Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="cyprus_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCyprus;
