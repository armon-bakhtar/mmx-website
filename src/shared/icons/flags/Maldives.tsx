import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMaldives = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#maldives_svg__a)">
      <rect width={22} height={16} fill="#AF010D" rx={2} />
      <path
        fill="#249F58"
        fillRule="evenodd"
        d="M3 4h16v8H3V4Z"
        clipRule="evenodd"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M11.655 10.581a2.51 2.51 0 0 1-.655.086c-1.446 0-2.62-1.195-2.62-2.667 0-1.472 1.174-2.667 2.62-2.667.226 0 .445.03.655.086-.678.293-1.179 1.337-1.179 2.581s.5 2.287 1.179 2.581Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="maldives_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMaldives;
