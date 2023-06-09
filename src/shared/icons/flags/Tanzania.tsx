import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTanzania = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#tanzania_svg__a)">
      <g clipPath="url(#tanzania_svg__b)">
        <rect width={22} height={16} fill="#249F58" rx={2} />
        <path
          fill="#3ECBF8"
          fillRule="evenodd"
          d="M0 16h22V2.133L0 13.867V16Z"
          clipRule="evenodd"
        />
        <path
          fill="#FFDA2C"
          fillRule="evenodd"
          d="M0 14.933 22 3.2v-4.267L0 10.667v4.266Z"
          clipRule="evenodd"
        />
        <path
          fill="#FFDA2C"
          fillRule="evenodd"
          d="M0 17.067 22 5.333V1.067L0 12.8v4.267Z"
          clipRule="evenodd"
        />
        <path
          fill="#151515"
          fillRule="evenodd"
          d="M0 16 22 4.267V0L0 11.733V16Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="tanzania_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="tanzania_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTanzania;
