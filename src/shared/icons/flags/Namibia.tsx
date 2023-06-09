import * as React from 'react';
import type { SVGProps } from 'react';
const SvgNamibia = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#namibia_svg__a)">
      <g clipPath="url(#namibia_svg__b)">
        <rect width={22} height={16} fill="#1A47B8" rx={2} />
        <path
          fill="#249F58"
          fillRule="evenodd"
          d="M0 16h22V2.133L0 13.867V16Z"
          clipRule="evenodd"
        />
        <path
          fill="#FFDA2C"
          fillRule="evenodd"
          d="m4.712 5.579-1.54.824.294-1.746L2.22 3.42l1.721-.253.77-1.59.77 1.59 1.72.253-1.246 1.237.295 1.745"
          clipRule="evenodd"
        />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M0 14.933 22 3.2v-4.267L0 10.667v4.266Z"
          clipRule="evenodd"
        />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M0 17.067 22 5.333V1.067L0 12.8v4.267Z"
          clipRule="evenodd"
        />
        <path
          fill="#F93939"
          fillRule="evenodd"
          d="M0 16 22 4.267V0L0 11.733V16Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="namibia_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="namibia_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgNamibia;
