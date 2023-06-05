import * as React from 'react';
import type { SVGProps } from 'react';
const SvgNigeria = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#nigeria_svg__a)">
      <g clipPath="url(#nigeria_svg__b)">
        <rect width={22} height={16} fill="#fff" rx={2} />
        <path
          fill="#0A6A30"
          fillRule="evenodd"
          d="M0 0h7.333v16H0V0Zm14.667 0H22v16h-7.333V0Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="nigeria_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="nigeria_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgNigeria;
