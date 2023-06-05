import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSouthKorea = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#south-korea_svg__a)">
      <rect width={22} height={16} fill="#fff" rx={2} />
      <path
        fill="#232C80"
        fillRule="evenodd"
        d="M14.667 8c0 2.062-1.642 3.733-3.667 3.733S7.333 10.062 7.333 8c0-1.195 2.462-1.696 4.535-1.507.22-.06.456-.093.704-.093 1.157 0 2.095.717 2.095 1.6Z"
        clipRule="evenodd"
      />
      <path
        fill="#F93939"
        fillRule="evenodd"
        d="M10.476 7.467S11.414 6.4 12.572 6.4c1.157 0 2.095.717 2.095 1.6 0-2.062-1.642-3.733-3.667-3.733-1.463 0-2.727.872-3.314 2.135C7.333 7.467 7.333 7.778 7.333 8c.524.533 1.107.533 1.572.533.465 0 .883-.206 1.171-.533l.4-.533Z"
        clipRule="evenodd"
      />
      <path
        fill="#151515"
        fillRule="evenodd"
        d="M15.714 5.333h2.095L15.714 3.2h-1.047l1.047 2.133Zm-9.428 0H4.19L6.286 3.2h1.047L6.286 5.333Zm9.428 5.334h2.095L15.714 12.8h-1.047l1.047-2.133Zm-9.428 0H4.19L6.286 12.8h1.047l-1.047-2.133Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="south-korea_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSouthKorea;
