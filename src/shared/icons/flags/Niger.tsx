import * as React from 'react';
import type { SVGProps } from 'react';
const SvgNiger = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#niger_svg__a)">
      <g clipPath="url(#niger_svg__b)">
        <rect width={22} height={16} fill="#fff" rx={2} />
        <path
          fill="#00B731"
          fillRule="evenodd"
          d="M0 11h22v5H0v-5Z"
          clipRule="evenodd"
        />
        <path
          fill="#FF6C2D"
          fillRule="evenodd"
          d="M0 0h22v5H0V0Z"
          clipRule="evenodd"
        />
        <path
          fill="#FF6C2D"
          d="M11 9.6c.868 0 1.572-.716 1.572-1.6 0-.884-.704-1.6-1.572-1.6-.868 0-1.571.716-1.571 1.6 0 .884.703 1.6 1.571 1.6Z"
        />
      </g>
    </g>
    <defs>
      <clipPath id="niger_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="niger_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgNiger;
