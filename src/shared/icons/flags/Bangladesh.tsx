import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBangladesh = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#bangladesh_svg__a)">
      <g clipPath="url(#bangladesh_svg__b)">
        <rect width={22} height={16} fill="#249F58" rx={2} />
        <path
          fill="#249F58"
          d="M19.905 0H2.095C.938 0 0 .955 0 2.133v11.734C0 15.045.938 16 2.095 16h17.81C21.062 16 22 15.045 22 13.867V2.133C22 .955 21.062 0 19.905 0Z"
        />
        <path fill="#F93939" d="M10 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" />
      </g>
    </g>
    <defs>
      <clipPath id="bangladesh_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="bangladesh_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBangladesh;
