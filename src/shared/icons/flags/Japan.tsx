import * as React from 'react';
import type { SVGProps } from 'react';
const SvgJapan = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#japan_svg__a)">
      <rect width={22} height={16} fill="#fff" rx={2} />
      <path
        fill="#F93939"
        d="M11 11.733c2.025 0 3.667-1.671 3.667-3.733 0-2.062-1.642-3.733-3.667-3.733S7.333 5.938 7.333 8c0 2.062 1.642 3.733 3.667 3.733Z"
      />
    </g>
    <defs>
      <clipPath id="japan_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgJapan;
