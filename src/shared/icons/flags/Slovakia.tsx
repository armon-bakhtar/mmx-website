import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSlovakia = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#slovakia_svg__a)">
      <g clipPath="url(#slovakia_svg__b)">
        <rect width={22} height={16} fill="#1A47B8" rx={2} />
        <path
          fill="#F93939"
          fillRule="evenodd"
          d="M0 10.667h22V16H0v-5.333Z"
          clipRule="evenodd"
        />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M0 0h22v5.333H0V0Zm10.403 10.667h.073V5.333H3.143v5.334h.073a1.985 1.985 0 0 0-.073.533c0 1.472 3.667 2.667 3.667 2.667s3.666-1.195 3.666-2.667c0-.181-.025-.36-.073-.533Z"
          clipRule="evenodd"
        />
        <path
          fill="#F93939"
          fillRule="evenodd"
          d="M9.429 10.667v-6.4H4.19v6.4c0 1.178 2.62 2.133 2.62 2.133s2.619-.955 2.619-2.133Z"
          clipRule="evenodd"
        />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M6.286 8.533V7.467H5.238V6.4h1.048V5.333h1.047V6.4h1.048v1.067H7.333v1.066h1.572V9.6H7.333v1.067H6.286V9.6H4.714V8.533h1.572Z"
          clipRule="evenodd"
        />
        <path
          fill="#1A47B8"
          fillRule="evenodd"
          d="M6.81 12.8s2.619-.955 2.619-2.133c0-1.179-1.048-1.067-2.62 0-1.57-1.067-2.619-1.179-2.619 0 0 1.178 2.62 2.133 2.62 2.133Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="slovakia_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="slovakia_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSlovakia;
