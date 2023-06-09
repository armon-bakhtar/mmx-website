import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLebanon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#lebanon_svg__a)">
      <g clipPath="url(#lebanon_svg__b)">
        <rect width={22} height={16} fill="#fff" rx={2} />
        <path
          fill="#F93939"
          fillRule="evenodd"
          d="M0 12h22v4H0v-4ZM0 0h22v4H0V0Z"
          clipRule="evenodd"
        />
        <path
          fill="#249F58"
          fillRule="evenodd"
          d="m11 4.267-3.667 6.4H9.43L11 11.733l1.572-1.066h2.095L11 4.267Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="lebanon_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="lebanon_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLebanon;
