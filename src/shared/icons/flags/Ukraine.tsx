import * as React from 'react';
import type { SVGProps } from 'react';
const SvgUkraine = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#ukraine_svg__a)">
      <rect width={22} height={16} fill="#FFDA2C" rx={2} />
      <path
        fill="#3A99FF"
        fillRule="evenodd"
        d="M0 0h22v8H0V0Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="ukraine_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgUkraine;
