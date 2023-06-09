import * as React from 'react';
import type { SVGProps } from 'react';
const SvgChina = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#china_svg__a)">
      <g clipPath="url(#china_svg__b)">
        <rect width={22} height={16} fill="#F93939" rx={2} />
        <path
          fill="#F93939"
          d="M19.905 0H2.095C.938 0 0 .955 0 2.133v11.734C0 15.045.938 16 2.095 16h17.81C21.062 16 22 15.045 22 13.867V2.133C22 .955 21.062 0 19.905 0Z"
        />
        <path
          fill="#FFDA2C"
          fillRule="evenodd"
          d="m5.76 7.712-1.54.825.293-1.747L3.27 5.553l1.72-.253.77-1.589.77 1.59 1.721.252L7.003 6.79 7.3 8.535l-1.54-.823ZM9.429 3.2h1.047v1.067H9.43V3.2Zm1.047 2.133h1.048V6.4h-1.048V5.333Zm0 2.134h1.048v1.066h-1.048V7.467ZM9.43 9.6h1.047v1.067H9.43V9.6Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="china_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="china_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgChina;
