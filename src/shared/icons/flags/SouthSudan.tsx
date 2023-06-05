import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSouthSudan = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#south-sudan_svg__a)">
      <g clipPath="url(#south-sudan_svg__b)">
        <rect width={22} height={16} fill="#fff" rx={2} />
        <path
          fill="#151515"
          fillRule="evenodd"
          d="M0 0h22v4.267H0V0Z"
          clipRule="evenodd"
        />
        <path
          fill="#249F58"
          fillRule="evenodd"
          d="M0 11.733h22V16H0v-4.267Z"
          clipRule="evenodd"
        />
        <path
          fill="#F93939"
          fillRule="evenodd"
          d="M0 5.333h22v5.334H0V5.333Z"
          clipRule="evenodd"
        />
        <path
          fill="#1A47B8"
          fillRule="evenodd"
          d="m0 0 12.571 8L0 16V0Z"
          clipRule="evenodd"
        />
        <path
          fill="#FFDA2C"
          fillRule="evenodd"
          d="m4.958 9.314-1.393 1.06.021-1.771-1.42-1.024 1.661-.525.516-1.69L5.35 6.807l1.74-.02-1.042 1.418.558 1.677-1.647-.569Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="south-sudan_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="south-sudan_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSouthSudan;
