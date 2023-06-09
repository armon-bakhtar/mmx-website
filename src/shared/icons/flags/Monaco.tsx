import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMonaco = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#monaco_svg__a)">
      <g clipPath="url(#monaco_svg__b)">
        <rect width={22} height={16} fill="#AF010D" rx={2} />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M0 8.533h22V16H0V8.533Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="monaco_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="monaco_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMonaco;
