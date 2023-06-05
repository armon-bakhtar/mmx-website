import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSingapore = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#singapore_svg__a)">
      <rect width={22} height={16} fill="#fff" rx={2} />
      <path
        fill="#F93939"
        fillRule="evenodd"
        d="M0 0h22v10H0V0Z"
        clipRule="evenodd"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M6.286 8.387a3.203 3.203 0 0 1-.967.146c-1.781 0-3.224-1.432-3.224-3.2 0-1.767 1.444-3.2 3.224-3.2.337 0 .662.052.967.146a3.206 3.206 0 0 0-2.257 3.054c0 1.433.95 2.646 2.257 3.054ZM8.38 3.2h1.048v1.067H8.38V3.2Zm2.095 1.067h1.048v1.066h-1.048V4.267ZM9.43 6.4h1.047v1.067H9.43V6.4ZM6.286 4.267h1.047v1.066H6.286V4.267ZM7.333 6.4h1.048v1.067H7.333V6.4Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="singapore_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSingapore;
