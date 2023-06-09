import * as React from 'react';
import type { SVGProps } from 'react';
const SvgNorthMacedonia = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#north-macedonia_svg__a)">
      <g clipPath="url(#north-macedonia_svg__b)">
        <rect width={22} height={16} fill="#AF010D" rx={2} />
        <path
          fill="#FFDA2C"
          fillRule="evenodd"
          d="m0 0 10.476 7.467h1.048L4.19 0H0Zm0 16 10.476-7.467h1.048L4.19 16H0Z"
          clipRule="evenodd"
        />
        <path
          fill="#FFDA2C"
          fillRule="evenodd"
          d="M11.524 7.467h-1.048L17.81 0H22L11.524 7.467Zm0 1.066h-1.048L17.81 16H22L11.524 8.533ZM8.38 7.467 0 6.4v3.2l8.38-1.067V7.467Zm5.238 0L22 6.4v3.2l-8.381-1.067V7.467Zm-3.143-2.134L9.43 0h3.142l-1.047 5.333h-1.048Zm0 5.334L9.43 16h3.142l-1.047-5.333"
          clipRule="evenodd"
        />
        <path
          fill="#AF010D"
          d="M11 10.667c1.446 0 2.619-1.194 2.619-2.667 0-1.473-1.173-2.667-2.62-2.667-1.446 0-2.618 1.194-2.618 2.667 0 1.473 1.172 2.667 2.619 2.667Z"
        />
        <path
          fill="#FFDA2C"
          d="M11 9.6c.868 0 1.572-.716 1.572-1.6 0-.884-.704-1.6-1.572-1.6-.868 0-1.571.716-1.571 1.6 0 .884.703 1.6 1.571 1.6Z"
        />
      </g>
    </g>
    <defs>
      <clipPath id="north-macedonia_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="north-macedonia_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgNorthMacedonia;
