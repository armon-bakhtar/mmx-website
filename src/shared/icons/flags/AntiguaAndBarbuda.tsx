import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAntiguaAndBarbuda = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#antigua-and-barbuda_svg__a)">
      <g clipPath="url(#antigua-and-barbuda_svg__b)">
        <rect width={22} height={16} fill="#151515" rx={2} />
        <path fill="#151515" d="M0 0h22v16H0z" />
        <path
          fill="#FFDA2C"
          d="M11 9.6c2.025 0 3.667-1.671 3.667-3.733 0-2.062-1.642-3.734-3.667-3.734S7.333 3.805 7.333 5.867C7.333 7.929 8.976 9.6 11 9.6Z"
        />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M0 9.6h22V16H0V9.6Z"
          clipRule="evenodd"
        />
        <path
          fill="#3A99FF"
          fillRule="evenodd"
          d="M0 6.4h22v3.2H0V6.4Z"
          clipRule="evenodd"
        />
        <path
          fill="#F93939"
          fillRule="evenodd"
          d="M11.524 16H0V0l11.524 16Z"
          clipRule="evenodd"
        />
        <path
          fill="#F93939"
          fillRule="evenodd"
          d="M10.476 16H22V0L10.476 16Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="antigua-and-barbuda_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="antigua-and-barbuda_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAntiguaAndBarbuda;
