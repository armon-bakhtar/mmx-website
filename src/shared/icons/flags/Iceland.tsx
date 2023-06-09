import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIceland = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#iceland_svg__a)">
      <g clipPath="url(#iceland_svg__b)">
        <rect width={22} height={16} fill="#1A47B8" rx={2} />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M6.286 9.6H0V6.4h6.286V0h3.143v6.4H22v3.2H9.429V16H6.286V9.6Z"
          clipRule="evenodd"
        />
        <path
          fill="#F93939"
          fillRule="evenodd"
          d="M7.333 7.467H0v1.066h7.333V16h1.048V8.533H22V7.467H8.38V0H7.334v7.467Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="iceland_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="iceland_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIceland;
