import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLesotho = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#lesotho_svg__a)">
      <g clipPath="url(#lesotho_svg__b)">
        <rect width={22} height={16} fill="#fff" rx={2} />
        <path
          fill="#151515"
          fillRule="evenodd"
          d="M10.58 6.187 9.429 8.533h3.143L11.42 6.187c.066-.09.105-.2.105-.32A.529.529 0 0 0 11 5.333a.536.536 0 0 0-.419.853ZM13.62 9.6c0 .589-1.173 1.067-2.62 1.067-1.445 0-2.618-.478-2.618-1.067V8.533h5.238V9.6Z"
          clipRule="evenodd"
        />
        <path
          fill="#249F58"
          fillRule="evenodd"
          d="M0 12h22v4H0v-4Z"
          clipRule="evenodd"
        />
        <path
          fill="#1A47B8"
          fillRule="evenodd"
          d="M0 0h22v4H0V0Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="lesotho_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="lesotho_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLesotho;
