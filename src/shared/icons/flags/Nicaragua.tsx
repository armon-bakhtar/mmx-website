import * as React from 'react';
import type { SVGProps } from 'react';
const SvgNicaragua = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#nicaragua_svg__a)">
      <g clipPath="url(#nicaragua_svg__b)">
        <rect width={22} height={16} fill="#fff" rx={2} />
        <path
          fill="#1A47B8"
          fillRule="evenodd"
          d="M0 11h22v5H0v-5Z"
          clipRule="evenodd"
        />
        <path
          fill="#3A99FF"
          fillRule="evenodd"
          d="M0 11h22v5H0v-5Z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="#1A47B8"
          fillRule="evenodd"
          d="M0 0h22v5H0V0Z"
          clipRule="evenodd"
        />
        <path
          fill="#3A99FF"
          fillRule="evenodd"
          d="M0 0h22v5H0V0Z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="#00B731"
          fillRule="evenodd"
          d="M9.429 9.6 11 6.4l1.572 3.2H9.429Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="nicaragua_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="nicaragua_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgNicaragua;
