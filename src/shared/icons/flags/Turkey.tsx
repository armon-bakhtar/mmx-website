import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTurkey = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#turkey_svg__a)">
      <rect width={22} height={16} fill="#F93939" rx={2} />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="m14.669 9.229-1.218.65.233-1.379-.985-.978 1.362-.203.608-1.254.607 1.256 1.362.202-.985.976.233 1.38"
        clipRule="evenodd"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M9.952 11.733c2.025 0 3.667-1.671 3.667-3.733 0-2.062-1.642-3.733-3.667-3.733S6.286 5.938 6.286 8c0 2.062 1.641 3.733 3.666 3.733ZM11 10.667c1.446 0 2.619-1.195 2.619-2.667 0-1.472-1.173-2.667-2.62-2.667-1.445 0-2.618 1.195-2.618 2.667 0 1.472 1.173 2.667 2.619 2.667Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="turkey_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTurkey;
