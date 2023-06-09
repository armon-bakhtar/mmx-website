import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSwitzerland = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#switzerland_svg__a)">
      <rect width={22} height={16} fill="#F93939" rx={2} />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M9.428 6.4H6.287v3.2h3.143v3.2h3.142V9.6h3.143V6.4h-3.143V3.2H9.428v3.2Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="switzerland_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSwitzerland;
