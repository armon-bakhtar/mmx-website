import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBahrain = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#bahrain_svg__a)">
      <rect width={22} height={16} fill="#F93939" rx={2} />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M0 0h7.333v16H0V0Zm7.333 0L9.43 1.6 7.333 3.2V0Zm0 3.2L9.43 4.8 7.333 6.4V3.2Zm0 3.2L9.43 8 7.333 9.6V6.4Zm0 3.2 2.096 1.6-2.096 1.6V9.6Zm0 3.2 2.096 1.6L7.333 16v-3.2Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="bahrain_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBahrain;
