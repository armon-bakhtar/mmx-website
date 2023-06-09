import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIraq = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#iraq_svg__a)">
      <g clipPath="url(#iraq_svg__b)">
        <rect width={22} height={16} fill="#fff" rx={2} />
        <path
          fill="#151515"
          fillRule="evenodd"
          d="M0 11h22v5H0v-5Z"
          clipRule="evenodd"
        />
        <path
          fill="#249F58"
          fillRule="evenodd"
          d="M10.476 8.533h1.048v.528c0 .31.234.539.524.539.28 0 .523-.241.523-.539V6.928c0-.291.243-.528.524-.528.29 0 .524.23.524.528v1.605h1.56a.54.54 0 0 1 .535.534.53.53 0 0 1-.534.533H6.82a.54.54 0 0 1-.534-.533.53.53 0 0 1 .335-.497.538.538 0 0 1 .121-.19L8.23 6.867c.203-.207.54-.2.739.002a.531.531 0 0 1 .004.75l-.9.915h1.355v-.528c0-.298.244-.538.524-.538.29 0 .524.228.524.538v.528Z"
          clipRule="evenodd"
        />
        <path
          fill="#F93939"
          fillRule="evenodd"
          d="M0 0h22v5H0V0Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="iraq_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="iraq_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIraq;
