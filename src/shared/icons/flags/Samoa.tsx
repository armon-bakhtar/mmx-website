import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSamoa = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#samoa_svg__a)">
      <g clipPath="url(#samoa_svg__b)">
        <rect width={22} height={16} fill="#F93939" rx={2} />
        <path
          fill="#F93939"
          d="M19.905 0H2.095C.938 0 0 .955 0 2.133v11.734C0 15.045.938 16 2.095 16h17.81C21.062 16 22 15.045 22 13.867V2.133C22 .955 21.062 0 19.905 0Z"
        />
        <path
          fill="#232C80"
          fillRule="evenodd"
          d="M0 0h11.524v8.533H0V0Z"
          clipRule="evenodd"
        />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M5.238 2.133h1.048V3.2H5.238V2.133ZM7.333 3.2h1.048v1.067H7.333V3.2ZM6.286 4.267h1.047v1.066H6.286V4.267ZM5.238 5.333h1.048V6.4H5.238V5.333ZM4.19 3.2h1.048v1.067H4.19V3.2Z"
          clipRule="evenodd"
          opacity={0.5}
        />
      </g>
    </g>
    <defs>
      <clipPath id="samoa_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="samoa_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSamoa;
