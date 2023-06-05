import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLibya = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#libya_svg__a)">
      <g clipPath="url(#libya_svg__b)">
        <rect width={22} height={16} fill="#151515" rx={2} />
        <path
          fill="#249F58"
          fillRule="evenodd"
          d="M0 11.733h22V16H0v-4.267Z"
          clipRule="evenodd"
        />
        <path
          fill="#F93939"
          fillRule="evenodd"
          d="M0 0h22v4.267H0V0Z"
          clipRule="evenodd"
        />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M12.571 7.467h1.048v1.066H12.57V7.467Z"
          clipRule="evenodd"
        />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M13.095 9.6A2.6 2.6 0 0 1 11 10.667c-1.446 0-2.62-1.195-2.62-2.667 0-1.472 1.174-2.667 2.62-2.667A2.6 2.6 0 0 1 13.095 6.4h-1.571c-.868 0-1.572.717-1.572 1.6 0 .883.704 1.6 1.572 1.6h1.571Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="libya_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="libya_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLibya;
