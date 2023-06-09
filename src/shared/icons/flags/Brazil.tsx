import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBrazil = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#brazil_svg__a)">
      <rect width={22} height={16} fill="#249F58" rx={2} />
      <path
        fill="#FFDA2C"
        fillRule="evenodd"
        d="M11 2.133 18.857 8 11 13.867 3.143 8"
        clipRule="evenodd"
      />
      <path
        fill="#1A47B8"
        d="M11 11.733c2.025 0 3.667-1.671 3.667-3.733 0-2.062-1.642-3.733-3.667-3.733S7.333 5.938 7.333 8c0 2.062 1.642 3.733 3.667 3.733Z"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M9.429 9.6v1.067h1.047V9.6H9.43Zm2.095 0v1.067h1.048V9.6h-1.048ZM8.38 6.4s2.373.427 4.082 1.171l2.205.962"
        clipRule="evenodd"
      />
      <path stroke="#fff" d="M8.38 6.4s2.373.427 4.082 1.171l2.205.962" />
    </g>
    <defs>
      <clipPath id="brazil_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrazil;
