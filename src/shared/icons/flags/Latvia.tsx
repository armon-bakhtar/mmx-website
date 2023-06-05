import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLatvia = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#latvia_svg__a)">
      <g clipPath="url(#latvia_svg__b)">
        <rect width={22} height={16} fill="#fff" rx={2} />
        <path
          fill="#AF010D"
          fillRule="evenodd"
          d="M0 9.6h22V16H0V9.6ZM0 0h22v6.4H0V0Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="latvia_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="latvia_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLatvia;
