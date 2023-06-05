import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSierraLeone = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#sierra-leone_svg__a)">
      <g clipPath="url(#sierra-leone_svg__b)">
        <rect width={22} height={16} fill="#fff" rx={2} />
        <path
          fill="#3A99FF"
          fillRule="evenodd"
          d="M0 10.667h22V16H0v-5.333Z"
          clipRule="evenodd"
        />
        <path
          fill="#00B731"
          fillRule="evenodd"
          d="M0 0h22v5.333H0V0Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="sierra-leone_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="sierra-leone_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSierraLeone;
