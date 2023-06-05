import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCostaRica = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#costa-rica_svg__a)">
      <rect width={22} height={16} fill="#1A47B8" rx={2} />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M0 3h22v2H0V3Z"
        clipRule="evenodd"
      />
      <path
        fill="#F93939"
        fillRule="evenodd"
        d="M0 5h22v6H0V5Z"
        clipRule="evenodd"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M0 11h22v2H0v-2Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="costa-rica_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCostaRica;
