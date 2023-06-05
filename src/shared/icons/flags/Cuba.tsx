import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCuba = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#cuba_svg__a)">
      <g clipPath="url(#cuba_svg__b)">
        <rect width={22} height={16} fill="#fff" rx={2} />
        <path
          fill="#1A47B8"
          fillRule="evenodd"
          d="M0 6.4h22v3.2H0V6.4Zm0 6.4h22V16H0v-3.2Z"
          clipRule="evenodd"
        />
        <path fill="#1A47B8" d="M0 0h22v3H0z" />
        <path
          fill="#F93939"
          fillRule="evenodd"
          d="m0 0 12.571 8L0 16V0Z"
          clipRule="evenodd"
        />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="m4.586 9.333-1.54.825.294-1.746-1.245-1.238 1.721-.252.77-1.589.77 1.59 1.722.252L5.83 8.413l.293 1.745"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="cuba_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="cuba_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCuba;
