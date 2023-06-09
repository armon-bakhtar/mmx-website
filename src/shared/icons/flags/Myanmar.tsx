import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMyanmar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#myanmar_svg__a)">
      <g clipPath="url(#myanmar_svg__b)">
        <rect width={22} height={16} fill="#249F58" rx={2} />
        <path
          fill="#F93939"
          fillRule="evenodd"
          d="M0 11h22v5H0v-5Z"
          clipRule="evenodd"
        />
        <path
          fill="#FFDA2C"
          fillRule="evenodd"
          d="M0 0h22v5H0V0Z"
          clipRule="evenodd"
        />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M11 10.462 8.528 12 9 8.743 7 6.438l2.764-.475L11 3l1.236 2.963L15 6.438l-2 2.305.472 3.257"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="myanmar_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="myanmar_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMyanmar;
