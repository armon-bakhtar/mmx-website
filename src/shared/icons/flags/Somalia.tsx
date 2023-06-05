import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSomalia = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#somalia_svg__a)">
      <rect width={22} height={16} fill="#3A99FF" rx={2} />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="m11.002 9.952-2.19 1.173.42-2.482L7.46 6.886l2.447-.362 1.094-2.257 1.095 2.257 2.446.362-1.77 1.757.418 2.481"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="somalia_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSomalia;
