import * as React from 'react';
import type { SVGProps } from 'react';
const SvgQatar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#qatar_svg__a)">
      <rect width={22} height={16} fill="#AF010D" rx={2} />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="m5.238 0 3.143 1.067-3.143 1.066L8.381 3.2 5.238 4.267l3.143 1.066L5.238 6.4l3.143 1.067-3.143 1.066L8.381 9.6l-3.143 1.067 3.143 1.066L5.238 12.8l3.143 1.067-3.143 1.066L8.381 16H0V0h5.238Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="qatar_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgQatar;
