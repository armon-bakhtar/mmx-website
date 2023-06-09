import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMauritius = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#mauritius_svg__a)">
      <g clipPath="url(#mauritius_svg__b)">
        <rect width={22} height={16} fill="#FFDA2C" rx={2} />
        <path
          fill="#00B731"
          fillRule="evenodd"
          d="M0 12h22v4H0v-4Z"
          clipRule="evenodd"
        />
        <path
          fill="#1A47B8"
          fillRule="evenodd"
          d="M0 4h22v5H0V4Z"
          clipRule="evenodd"
        />
        <path
          fill="#F93939"
          fillRule="evenodd"
          d="M0 0h22v4H0V0Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="mauritius_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="mauritius_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMauritius;
