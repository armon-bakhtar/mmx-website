import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMorocco = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#morocco_svg__a)">
      <rect width={22} height={16} fill="#AF010D" rx={2} />
      <path
        fill="#249F58"
        fillRule="evenodd"
        d="m11 9.59-1.54.82.293-1.743L8.51 7.429l1.721-.254.77-1.587.77 1.586 1.721.256-1.246 1.236.293 1.745"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="morocco_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMorocco;
