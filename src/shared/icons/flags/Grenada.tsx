import * as React from 'react';
import type { SVGProps } from 'react';
const SvgGrenada = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#grenada_svg__a)">
      <rect width={22} height={16} fill="#F93939" rx={2} />
      <path
        fill="#FFDA2C"
        fillRule="evenodd"
        d="M3.143 3.2h15.714v9.6H3.143V3.2Z"
        clipRule="evenodd"
      />
      <path
        fill="#249F58"
        fillRule="evenodd"
        d="M3.143 3.2 11 8l-7.857 4.8V3.2Z"
        clipRule="evenodd"
      />
      <path
        fill="#FFDA2C"
        fillRule="evenodd"
        d="M4.19 7.467h1.048v1.066H4.19V7.467Z"
        clipRule="evenodd"
      />
      <path
        fill="#249F58"
        fillRule="evenodd"
        d="M18.857 3.2 11 8l7.857 4.8V3.2Z"
        clipRule="evenodd"
      />
      <path
        fill="#FFDA2C"
        fillRule="evenodd"
        d="M7.333 1.067h1.048v1.066H7.333V1.067Zm3.143 0h1.048v1.066h-1.048V1.067Zm3.143 0h1.048v1.066h-1.048V1.067Zm-6.285 12.8H8.38v1.066H7.333v-1.066Zm3.142 0h1.048v1.066h-1.048v-1.066Zm3.143 0h1.048v1.066h-1.048v-1.066Z"
        clipRule="evenodd"
      />
      <path
        fill="#F93939"
        d="M11 10.667c1.446 0 2.619-1.194 2.619-2.667 0-1.473-1.173-2.667-2.62-2.667-1.446 0-2.618 1.194-2.618 2.667 0 1.473 1.172 2.667 2.619 2.667Z"
      />
      <path
        fill="#FFDA2C"
        fillRule="evenodd"
        d="m11 9.333-1.54.825.293-1.746L8.51 7.174l1.721-.252.77-1.589.77 1.59 1.721.252-1.246 1.238.293 1.745"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="grenada_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGrenada;
