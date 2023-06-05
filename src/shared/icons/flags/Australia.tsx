import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAustralia = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#australia_svg__a)">
      <g clipPath="url(#australia_svg__b)">
        <rect width={22} height={16} fill="#1A47B8" rx={2} />
        <path
          fill="#1A47B8"
          d="M19.905 0H2.095C.938 0 0 .955 0 2.133v11.734C0 15.045.938 16 2.095 16h17.81C21.062 16 22 15.045 22 13.867V2.133C22 .955 21.062 0 19.905 0Z"
        />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="m4.19 12.267 1.048-.534.524-1.066.524 1.066 1.047.534-1.047.533-.524 1.067-.524-1.067-1.048-.533ZM14.667 3.2v1.067h1.047V3.2h-1.047Zm3.143 1.067v1.066h1.047V4.267H17.81ZM13.619 6.4v1.067h1.048V6.4h-1.048Zm3.143 1.067v1.066h1.047V7.467h-1.047Zm-1.048 3.2v1.066h1.048v-1.066h-1.048Z"
          clipRule="evenodd"
          opacity={0.5}
        />
        <path
          fill="#fff"
          d="M9.429 1.067H2.095c-.578 0-1.047.477-1.047 1.066v5.334c0 .589.469 1.066 1.047 1.066H9.43c.578 0 1.047-.477 1.047-1.066V2.133c0-.589-.469-1.066-1.047-1.066Z"
        />
        <path
          fill="#F93939"
          fillRule="evenodd"
          d="M5.238 5.333H2.095V4.267h3.143V2.133h1.048v2.134h3.143v1.066H6.286v2.134H5.238V5.333ZM7.858 6.4v1.067h1.57V6.4h-1.57Zm0-4.267V3.2h1.57V2.133h-1.57ZM2.094 6.4v1.067h1.572V6.4H2.095Zm0-4.267V3.2h1.572V2.133H2.095Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="australia_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="australia_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAustralia;
