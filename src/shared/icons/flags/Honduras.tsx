import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHonduras = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#honduras_svg__a)">
      <g clipPath="url(#honduras_svg__b)">
        <rect width={22} height={16} fill="#fff" rx={2} />
        <path
          fill="#3ECBF8"
          fillRule="evenodd"
          d="M0 11h22v5H0v-5Zm7.333-4.6h1.048v1.067H7.333V6.4Zm0 2.133h1.048V9.6H7.333V8.533ZM13.62 6.4h1.048v1.067h-1.048V6.4Zm0 2.133h1.048V9.6h-1.048V8.533Zm-3.143-1.066h1.048v1.066h-1.048V7.467ZM0 0h22v5H0V0Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="honduras_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="honduras_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHonduras;
