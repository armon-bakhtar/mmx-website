import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTrinidadAndTobago = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#trinidad-and-tobago_svg__a)">
      <g clipPath="url(#trinidad-and-tobago_svg__b)">
        <rect width={22} height={16} fill="#AF010D" rx={2} />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M7.333 0 22 16h-7.333L0 0h7.333Z"
          clipRule="evenodd"
        />
        <path
          fill="#151515"
          fillRule="evenodd"
          d="m6.286 0 14.667 16h-5.239L1.048 0h6.286-1.048Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="trinidad-and-tobago_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="trinidad-and-tobago_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTrinidadAndTobago;
