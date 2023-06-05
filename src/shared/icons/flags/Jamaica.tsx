import * as React from 'react';
import type { SVGProps } from 'react';
const SvgJamaica = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#jamaica_svg__a)">
      <g clipPath="url(#jamaica_svg__b)">
        <rect width={22} height={16} fill="#249F58" rx={2} />
        <path
          fill="#151515"
          fillRule="evenodd"
          d="m0 0 10.476 8.533L0 16V0Zm22 0L11.524 8.533 22 16V0Z"
          clipRule="evenodd"
        />
        <path
          fill="#FFDA2C"
          fillRule="evenodd"
          d="M9.08 8 0 1.6V0h1.571L11 6.645 20.429 0H22v1.6L12.92 8 22 14.4V16h-1.571L11 9.355 1.571 16H0v-1.6L9.08 8Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="jamaica_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="jamaica_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgJamaica;
