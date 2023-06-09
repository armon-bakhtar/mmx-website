import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLaos = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#laos_svg__a)">
      <g clipPath="url(#laos_svg__b)">
        <rect width={22} height={16} fill="#232C80" rx={2} />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M11 10.667c1.446 0 2.619-1.195 2.619-2.667 0-1.472-1.173-2.667-2.62-2.667-1.445 0-2.618 1.195-2.618 2.667 0 1.472 1.173 2.667 2.619 2.667Z"
          clipRule="evenodd"
        />
        <path
          fill="#F93939"
          fillRule="evenodd"
          d="M0 11.733h22V16H0v-4.267ZM0 0h22v4.267H0V0Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="laos_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="laos_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLaos;
