import * as React from 'react';
import type { SVGProps } from 'react';
const SvgZambia = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#zambia_svg__a)">
      <g clipPath="url(#zambia_svg__b)">
        <rect width={22} height={16} fill="#249F58" rx={2} />
        <path
          fill="#FF6C2D"
          fillRule="evenodd"
          d="M19.905 6.4H22V16h-2.095V6.4Z"
          clipRule="evenodd"
        />
        <path
          fill="#151515"
          fillRule="evenodd"
          d="M17.81 6.4h2.095V16H17.81V6.4Z"
          clipRule="evenodd"
        />
        <path
          fill="#F93939"
          fillRule="evenodd"
          d="M15.714 6.4h2.096V16h-2.096V6.4Z"
          clipRule="evenodd"
        />
        <path
          fill="#FF6C2D"
          fillRule="evenodd"
          d="m14.666 3.2 3.143 1.067 1.048 1.066 1.048-1.066L23.047 3.2h-4.19l-1.048-1.067V3.2h-3.143Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="zambia_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="zambia_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgZambia;
