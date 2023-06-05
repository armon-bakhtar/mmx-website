import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMexico = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#mexico_svg__a)">
      <g clipPath="url(#mexico_svg__b)">
        <rect width={22} height={16} fill="#fff" rx={2} />
        <path fill="#F93939" d="M16 0h6v16h-6z" />
        <path fill="#249F58" d="M0 0h6v16H0z" />
        <path
          fill="#249F58"
          fillRule="evenodd"
          d="M13.977 8c.015.11.023.221.023.334C14 9.806 12.657 11 11 11S8 9.806 8 8.334c0-.113.008-.224.023-.334C8.208 9.024 9.47 9.815 11 9.815c1.53 0 2.792-.792 2.977-1.815Z"
          clipRule="evenodd"
        />
        <ellipse cx={11} cy={6.933} fill="#AE6A3E" rx={1.571} ry={1.6} />
      </g>
    </g>
    <defs>
      <clipPath id="mexico_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="mexico_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMexico;
