import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIndonesia = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#indonesia_svg__a)">
      <rect width={22} height={16} fill="#fff" rx={2} />
      <path
        fill="#F93939"
        fillRule="evenodd"
        d="M0 0h22v8H0V0Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="indonesia_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIndonesia;
