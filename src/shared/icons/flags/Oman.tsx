import * as React from 'react';
import type { SVGProps } from 'react';
const SvgOman = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#oman_svg__a)">
      <g clipPath="url(#oman_svg__b)">
        <rect width={22} height={16} fill="#F93939" rx={2} />
        <path
          fill="#F93939"
          d="M19.905 0H2.095C.938 0 0 .955 0 2.133v11.734C0 15.045.938 16 2.095 16h17.81C21.062 16 22 15.045 22 13.867V2.133C22 .955 21.062 0 19.905 0Z"
        />
        <path
          fill="#249F58"
          fillRule="evenodd"
          d="M6 11h16v5H6v-5Z"
          clipRule="evenodd"
        />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M6 0h16v5H6V0ZM4.794 4.163a1.552 1.552 0 0 1-2.422.249 1.618 1.618 0 0 1 .244-2.466c-.236.448-.042 1.164.497 1.712.538.546 1.241.744 1.682.504v.001Z"
          clipRule="evenodd"
        />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M2.54 4.163a1.552 1.552 0 0 0 2.422.249 1.618 1.618 0 0 0-.244-2.466c.235.448.042 1.164-.497 1.712-.538.546-1.241.744-1.682.504v.001Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="oman_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="oman_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgOman;
