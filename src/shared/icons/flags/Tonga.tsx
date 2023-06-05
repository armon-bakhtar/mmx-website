import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTonga = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#tonga_svg__a)">
      <g clipPath="url(#tonga_svg__b)">
        <rect width={22} height={16} fill="#AF010D" rx={2} />
        <path
          fill="#AF010D"
          d="M19.905 0H2.095C.938 0 0 .955 0 2.133v11.734C0 15.045.938 16 2.095 16h17.81C21.062 16 22 15.045 22 13.867V2.133C22 .955 21.062 0 19.905 0Z"
        />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M0 0h12v11H0V0Z"
          clipRule="evenodd"
        />
        <path
          fill="#AF010D"
          fillRule="evenodd"
          d="M7.334 4.267V2.133H5.238v2.134H3.143V6.4h2.095v2.133h2.096V6.4h2.095V4.267H7.334Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="tonga_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="tonga_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTonga;
