import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIsrael = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#israel_svg__a)">
      <rect width={22} height={16} fill="#fff" rx={2} />
      <path
        fill="#1A47B8"
        fillRule="evenodd"
        d="M0 11.733h22v2.134H0v-2.134Zm0-9.6h22v2.134H0V2.133ZM10.345 9.6H8.381L9.364 8 8.38 6.4h1.964L11 5.333l.655 1.067h1.964L12.636 8l.983 1.6h-1.964L11 10.667 10.345 9.6ZM9.952 8 11 6.933 12.048 8 11 9.067 9.952 8Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="israel_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIsrael;
