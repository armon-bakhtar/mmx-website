import * as React from 'react';
import type { SVGProps } from 'react';
const SvgNauru = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#nauru_svg__a)">
      <rect width={22} height={16} fill="#232C80" rx={2} />
      <path
        fill="#FFDA2C"
        fillRule="evenodd"
        d="M0 7.467h22v1.066H0V7.467Z"
        clipRule="evenodd"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="m7.855 13.045-1.54.825.293-1.746-1.244-1.238 1.721-.252.77-1.59.769 1.59 1.721.252L9.1 12.124l.295 1.745"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="nauru_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgNauru;
