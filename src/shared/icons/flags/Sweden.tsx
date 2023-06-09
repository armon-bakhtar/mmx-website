import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSweden = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#sweden_svg__a)">
      <g clipPath="url(#sweden_svg__b)">
        <rect width={22} height={16} fill="#3A99FF" rx={2} />
        <path
          fill="#FFDA2C"
          fillRule="evenodd"
          d="M6.286 9.6H0V6.4h6.286V0h3.143v6.4H22v3.2H9.429V16H6.286V9.6Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="sweden_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="sweden_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSweden;
