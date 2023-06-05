import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTunisia = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#tunisia_svg__a)">
      <rect width={22} height={16} fill="#F93939" rx={2} />
      <path
        fill="#fff"
        d="M11 11.733c2.025 0 3.667-1.671 3.667-3.733 0-2.062-1.642-3.733-3.667-3.733S7.333 5.938 7.333 8c0 2.062 1.642 3.733 3.667 3.733Z"
      />
      <path
        fill="#F93939"
        fillRule="evenodd"
        d="M12.571 7.467h1.048v1.066H12.57V7.467Z"
        clipRule="evenodd"
      />
      <path
        fill="#F93939"
        fillRule="evenodd"
        d="M13.095 9.6A2.6 2.6 0 0 1 11 10.667c-1.446 0-2.62-1.195-2.62-2.667 0-1.472 1.174-2.667 2.62-2.667A2.6 2.6 0 0 1 13.095 6.4h-1.571c-.868 0-1.572.717-1.572 1.6 0 .883.704 1.6 1.572 1.6h1.571Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="tunisia_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTunisia;
