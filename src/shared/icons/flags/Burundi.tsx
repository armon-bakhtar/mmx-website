import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBurundi = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#burundi_svg__a)">
      <g clipPath="url(#burundi_svg__b)">
        <path
          fill="#F93939"
          d="M19.905 0H2.095C.938 0 0 .955 0 2.133v11.734C0 15.045.938 16 2.095 16h17.81C21.062 16 22 15.045 22 13.867V2.133C22 .955 21.062 0 19.905 0Z"
        />
        <path
          fill="#00B731"
          fillRule="evenodd"
          d="m0 0 10.476 8.533L0 16V0Zm22 0L11.524 8.533 22 16V0Z"
          clipRule="evenodd"
        />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M7.499 6.886 0 1.6V0h1.571l7.173 5.056A3.605 3.605 0 0 1 11 4.266c.85 0 1.634.295 2.255.79L20.43 0H22v1.6l-7.499 5.286c.108.352.166.726.166 1.114 0 .388-.058.762-.166 1.114L22 14.4V16h-1.571l-7.173-5.056a3.607 3.607 0 0 1-2.256.79c-.85 0-1.634-.295-2.256-.79L1.571 16H0v-1.6l7.499-5.286A3.79 3.79 0 0 1 7.333 8c0-.388.058-.762.166-1.114Z"
          clipRule="evenodd"
        />
        <path
          fill="#AF010D"
          fillRule="evenodd"
          d="M10.476 6.4h1.048v1.067h-1.048V6.4Zm1.048 2.133h1.048V9.6h-1.048V8.533Zm-2.095 0h1.047V9.6H9.43V8.533Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="burundi_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="burundi_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBurundi;
