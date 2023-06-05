import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBelarus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#belarus_svg__a)">
      <g clipPath="url(#belarus_svg__b)">
        <rect width={22} height={16} fill="#F93939" rx={2} />
        <path
          fill="#F93939"
          d="M19.905 0H2.095C.938 0 0 .955 0 2.133v11.734C0 15.045.938 16 2.095 16h17.81C21.062 16 22 15.045 22 13.867V2.133C22 .955 21.062 0 19.905 0Z"
        />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="m3.143 0 2.095 1.6-2.095 1.6V0Zm0 3.2 2.095 1.6-2.095 1.6V3.2Zm0 3.2L5.238 8 3.143 9.6V6.4Zm0 3.2 2.095 1.6-2.095 1.6V9.6Zm0 3.2 2.095 1.6L3.143 16v-3.2ZM2.095 0 0 1.6l2.095 1.6V0Zm0 3.2L0 4.8l2.095 1.6V3.2Zm0 3.2L0 8l2.095 1.6V6.4Zm0 3.2L0 11.2l2.095 1.6V9.6Zm0 3.2L0 14.4 2.095 16v-3.2Zm0-12.8h1.048v2.133H2.095V0Zm0 13.867h1.048V16H2.095v-2.133Zm0-8.534h1.048v2.134H2.095V5.333Zm0-2.133h1.048v1.067H2.095V3.2Zm0 8.533h1.048V12.8H2.095v-1.067Zm0-3.2h1.048v2.134H2.095V8.533Z"
          clipRule="evenodd"
        />
        <path
          fill="#249F58"
          fillRule="evenodd"
          d="M5 12h17v4H5v-4Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="belarus_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="belarus_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBelarus;
