import * as React from 'react';
import type { SVGProps } from 'react';
const SvgYemen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#yemen_svg__a)">
      <g clipPath="url(#yemen_svg__b)">
        <rect width={22} height={16} fill="#fff" rx={2} />
        <path
          fill="#151515"
          fillRule="evenodd"
          d="M0 11h22v5H0v-5Z"
          clipRule="evenodd"
        />
        <path
          fill="#AF010D"
          fillRule="evenodd"
          d="M0 0h22v5H0V0Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="yemen_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="yemen_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgYemen;
