import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMalaysia = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#malaysia_svg__a)">
      <rect width={22} height={16} fill="#fff" rx={2} />
      <path
        fill="#AF010D"
        d="M0 0h22v1.149H0zM0 2.297h22v1.149H0zM0 4.595h22v1.149H0zM0 6.892h22v1.149H0zM0 9.19h22v1.149H0zM0 11.487h22v1.149H0zM0 13.785h22v1.149H0z"
      />
      <path
        fill="#1A47B8"
        fillRule="evenodd"
        d="M0 0h11.524v9.195H0V0Z"
        clipRule="evenodd"
      />
      <path
        fill="#FFDA2C"
        fillRule="evenodd"
        d="M7.333 4.267h1.048v1.066H7.333V4.267Z"
        clipRule="evenodd"
      />
      <path
        fill="#FFDA2C"
        fillRule="evenodd"
        d="M7.857 6.4a2.6 2.6 0 0 1-2.095 1.067c-1.446 0-2.619-1.195-2.619-2.667 0-1.472 1.173-2.667 2.62-2.667A2.6 2.6 0 0 1 7.856 3.2H6.286c-.867 0-1.571.717-1.571 1.6 0 .883.704 1.6 1.57 1.6h1.572Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="malaysia_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMalaysia;
