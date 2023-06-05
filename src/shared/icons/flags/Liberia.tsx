import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLiberia = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#liberia_svg__a)">
      <g clipPath="url(#liberia_svg__b)">
        <rect width={22} height={16} fill="#fff" rx={2} />
        <path
          fill="#F93939"
          fillRule="evenodd"
          d="M7 0h15v1.067H7V0Zm0 2.133h15V3.2H7V2.133Zm0 2.134h15v1.066H7V4.267ZM7 6.4h15v1.067H7V6.4ZM0 8.533h22V9.6H0V8.533Zm0 2.134h22v1.066H0v-1.066ZM0 12.8h22v1.067H0V12.8Z"
          clipRule="evenodd"
        />
        <path fill="#F93939" d="M22 14.933H0V16h22v-1.067Z" />
        <path
          fill="#1A47B8"
          fillRule="evenodd"
          d="M0 0h7v7.5H0V0Z"
          clipRule="evenodd"
        />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M3.5 5.145 1.955 6l.295-1.81L1 2.91l1.727-.263L3.5 1l.773 1.645L6 2.91 4.75 4.192 5.045 6"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="liberia_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="liberia_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLiberia;
