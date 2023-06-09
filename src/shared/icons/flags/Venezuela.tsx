import * as React from 'react';
import type { SVGProps } from 'react';
const SvgVenezuela = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#venezuela_svg__a)">
      <g clipPath="url(#venezuela_svg__b)">
        <rect width={22} height={16} fill="#1A47B8" rx={2} />
        <path
          fill="#BCC9F0"
          fillRule="evenodd"
          d="M6 8.667h1.111V10H6V8.667Zm2.222-1.334h1.111v1.334h-1.11V7.333Zm4.445 0h1.11v1.334h-1.11V7.333Zm2.222 1.334H16V10h-1.111V8.667ZM10.444 6h1.112v1.333h-1.112V6Z"
          clipRule="evenodd"
        />
        <path
          fill="#F93939"
          fillRule="evenodd"
          d="M0 11h22v5H0v-5Z"
          clipRule="evenodd"
        />
        <path
          fill="#FFDA2C"
          fillRule="evenodd"
          d="M0 0h22v5H0V0Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="venezuela_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="venezuela_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgVenezuela;
