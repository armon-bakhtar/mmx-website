import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMongolia = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#mongolia_svg__a)">
      <g clipPath="url(#mongolia_svg__b)">
        <rect width={22} height={16} fill="#1A47B8" rx={2} />
        <path
          fill="#F93939"
          fillRule="evenodd"
          d="M0 0h7.333v16H0V0Z"
          clipRule="evenodd"
        />
        <path
          fill="#FFDA2C"
          fillRule="evenodd"
          d="M2.095 7.467h1.048v4.266H2.095V7.467Zm3.143 0h1.048v4.266H5.238V7.467Z"
          clipRule="evenodd"
        />
        <path
          fill="#FFDA2C"
          d="M4.19 11.733c.58 0 1.048-.477 1.048-1.066 0-.59-.469-1.067-1.047-1.067-.579 0-1.048.478-1.048 1.067s.47 1.066 1.048 1.066ZM4.19 8.533c.58 0 1.048-.477 1.048-1.066 0-.59-.469-1.067-1.047-1.067-.579 0-1.048.478-1.048 1.067s.47 1.066 1.048 1.066Z"
        />
        <path
          fill="#FFDA2C"
          fillRule="evenodd"
          d="m4.19 3.2 1.048 2.133H3.143L4.191 3.2Z"
          clipRule="evenodd"
        />
        <path
          fill="#F93939"
          fillRule="evenodd"
          d="M14.666 0H22v16h-7.334V0Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="mongolia_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="mongolia_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMongolia;
