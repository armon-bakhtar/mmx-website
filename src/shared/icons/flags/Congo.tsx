import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCongo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#congo_svg__a)">
      <g clipPath="url(#congo_svg__b)">
        <rect width={22} height={16} fill="#249F58" rx={2} />
        <path
          fill="#F93939"
          fillRule="evenodd"
          d="M6.286 16 19.905 0H22v16H6.286Z"
          clipRule="evenodd"
        />
        <path
          fill="#FFDA2C"
          fillRule="evenodd"
          d="M7.333 16 22 0h-7.333L0 16h7.333Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="congo_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="congo_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCongo;
