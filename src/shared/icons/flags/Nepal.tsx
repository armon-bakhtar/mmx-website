import * as React from 'react';
import type { SVGProps } from 'react';
const SvgNepal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#nepal_svg__a)">
      <g clipPath="url(#nepal_svg__b)">
        <path
          fill="#003495"
          fillRule="evenodd"
          d="m0 0 13.619 8.533H6.286L13.619 16H0V0Z"
          clipRule="evenodd"
        />
        <path
          fill="#DF0A37"
          fillRule="evenodd"
          d="m1.047 2.133 8.381 5.334H3.143l7.333 7.466H1.047V2.134Z"
          clipRule="evenodd"
        />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M5.149 5.333a.465.465 0 0 1 .09.267c0 .442-.705.8-1.572.8-.868 0-1.572-.358-1.572-.8 0-.094.032-.183.09-.267.215.156.798.267 1.482.267.684 0 1.267-.11 1.482-.267Z"
          clipRule="evenodd"
        />
        <path
          fill="#fff"
          d="M3.667 13.867c.868 0 1.571-.717 1.571-1.6 0-.884-.703-1.6-1.571-1.6s-1.572.716-1.572 1.6c0 .883.704 1.6 1.572 1.6Z"
        />
      </g>
    </g>
    <defs>
      <clipPath id="nepal_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="nepal_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgNepal;
