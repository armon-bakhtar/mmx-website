import * as React from 'react';
import type { SVGProps } from 'react';
const SvgEthiopia = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#ethiopia_svg__a)">
      <g clipPath="url(#ethiopia_svg__b)">
        <path
          fill="#FFDA2C"
          d="M19.905 0H2.095C.938 0 0 .955 0 2.133v11.734C0 15.045.938 16 2.095 16h17.81C21.062 16 22 15.045 22 13.867V2.133C22 .955 21.062 0 19.905 0Z"
        />
        <path
          fill="#F93939"
          fillRule="evenodd"
          d="M0 10.667h22V16H0v-5.333Z"
          clipRule="evenodd"
        />
        <path
          fill="#249F58"
          fillRule="evenodd"
          d="M0 0h22v5.333H0V0Z"
          clipRule="evenodd"
        />
        <path
          fill="#1A47B8"
          d="M11 12.8c2.604 0 4.714-2.149 4.714-4.8S13.604 3.2 11 3.2C8.396 3.2 6.286 5.349 6.286 8s2.11 4.8 4.714 4.8Z"
        />
        <path
          fill="#FFDA2C"
          fillRule="evenodd"
          d="m10.998 9.333-1.54.825.293-1.746-1.244-1.238 1.721-.252.77-1.59.769 1.59 1.721.252-1.246 1.238.295 1.745"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="ethiopia_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="ethiopia_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgEthiopia;
