import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBotswana = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#botswana_svg__a)">
      <rect width={22} height={16} fill="#3ECBF8" rx={2} />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M0 9.6h22v1.067H0V9.6Z"
        clipRule="evenodd"
      />
      <path
        fill="#151515"
        fillRule="evenodd"
        d="M0 6.4h22v3.2H0V6.4Z"
        clipRule="evenodd"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M0 5.333h22V6.4H0V5.333Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="botswana_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBotswana;
