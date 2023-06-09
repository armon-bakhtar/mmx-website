import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLithuania = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#lithuania_svg__a)">
      <g clipPath="url(#lithuania_svg__b)">
        <rect width={22} height={16} fill="#0A6A30" rx={2} />
        <path
          fill="#AF010D"
          fillRule="evenodd"
          d="M0 11h22v5H0v-5Z"
          clipRule="evenodd"
        />
        <path
          fill="#FFDA2C"
          fillRule="evenodd"
          d="M0 0h22v5H0V0Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="lithuania_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="lithuania_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLithuania;
