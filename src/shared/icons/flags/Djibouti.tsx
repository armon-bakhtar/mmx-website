import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDjibouti = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#djibouti_svg__a)">
      <g clipPath="url(#djibouti_svg__b)">
        <rect width={22} height={16} fill="#249F58" rx={2} />
        <path
          fill="#3ECBF8"
          fillRule="evenodd"
          d="M0 0h22v8H0V0Z"
          clipRule="evenodd"
        />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="m0 0 12.571 8L0 16V0Z"
          clipRule="evenodd"
        />
        <path
          fill="#F93939"
          fillRule="evenodd"
          d="m4.714 9.333-1.54.825.294-1.746-1.245-1.238 1.721-.252.77-1.589.77 1.59 1.722.252-1.247 1.238.293 1.745"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="djibouti_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="djibouti_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDjibouti;
