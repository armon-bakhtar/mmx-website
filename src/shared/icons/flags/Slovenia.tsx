import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSlovenia = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#slovenia_svg__a)">
      <g clipPath="url(#slovenia_svg__b)">
        <rect width={22} height={16} fill="#1A47B8" rx={2} />
        <path
          fill="#F93939"
          fillRule="evenodd"
          d="M0 11h22v5H0v-5Z"
          clipRule="evenodd"
        />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M0 0h22v5H0V0Z"
          clipRule="evenodd"
        />
        <path
          fill="#F93939"
          d="M6.81 3.2H4.713c-.578 0-1.048.478-1.048 1.067v2.666c0 .59.47 1.067 1.048 1.067H6.81c.579 0 1.048-.478 1.048-1.067V4.267c0-.59-.47-1.067-1.048-1.067Z"
        />
        <path
          fill="#1A47B8"
          d="M6.286 3.2H5.238c-.579 0-1.048.478-1.048 1.067V6.4c0 .59.47 1.067 1.048 1.067h1.048c.578 0 1.047-.478 1.047-1.067V4.267c0-.59-.469-1.067-1.047-1.067Z"
        />
        <path
          fill="#FFDA2C"
          fillRule="evenodd"
          d="M5.238 4.267h1.048v1.066H5.238V4.267Z"
          clipRule="evenodd"
        />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="m4.19 6.4 1.572-.533 1.571.533-1.047 1.067H5.238L4.19 6.4Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="slovenia_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="slovenia_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSlovenia;
