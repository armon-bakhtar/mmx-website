import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMozambique = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#mozambique_svg__a)">
      <g clipPath="url(#mozambique_svg__b)">
        <rect width={22} height={16} fill="#151515" rx={2} />
        <path
          fill="#FFDA2C"
          fillRule="evenodd"
          d="M0 11h22v5H0v-5Z"
          clipRule="evenodd"
        />
        <path
          fill="#249F58"
          fillRule="evenodd"
          d="M0 0h22v5H0V0Z"
          clipRule="evenodd"
        />
        <path
          fill="#1A47B8"
          fillRule="evenodd"
          d="M0 0h22v5H0V0Z"
          clipRule="evenodd"
          opacity={0.35}
        />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M0 4h22v1.143H0V4Zm0 6.857h22V12H0v-1.143Z"
          clipRule="evenodd"
        />
        <path
          fill="#F93939"
          fillRule="evenodd"
          d="M0 0v16l11-8.018L0 0Z"
          clipRule="evenodd"
        />
        <path
          fill="#FFDA2C"
          fillRule="evenodd"
          d="M3.5 9.145 1.956 10l.294-1.81L1 6.908l1.728-.262L3.5 5l.771 1.647L6 6.91 4.749 8.191 5.045 10"
          clipRule="evenodd"
        />
        <path
          fill="#151515"
          fillRule="evenodd"
          d="M2 6.43 2.43 6 5 8.572 4.573 9 2 6.43Z"
          clipRule="evenodd"
        />
        <path
          fill="#151515"
          fillRule="evenodd"
          d="M5 6.43 4.572 6 2 8.572 2.43 9l2.569-2.57H5Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="mozambique_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="mozambique_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMozambique;
