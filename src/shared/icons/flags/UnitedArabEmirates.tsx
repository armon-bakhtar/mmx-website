import * as React from 'react';
import type { SVGProps } from 'react';
const SvgUnitedArabEmirates = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#united-arab-emirates_svg__a)">
      <g clipPath="url(#united-arab-emirates_svg__b)">
        <path
          fill="#fff"
          d="M19.905 0H2.095C.938 0 0 .955 0 2.133v11.734C0 15.045.938 16 2.095 16h17.81C21.062 16 22 15.045 22 13.867V2.133C22 .955 21.062 0 19.905 0Z"
        />
        <path
          fill="#151515"
          fillRule="evenodd"
          d="M0 11h22v5H0v-5Z"
          clipRule="evenodd"
        />
        <path
          fill="#249F58"
          fillRule="evenodd"
          d="M0 0h22v5H0V0Z"
          clipRule="evenodd"
        />
        <path
          fill="#F93939"
          fillRule="evenodd"
          d="M0 0v16h6V0H0Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="united-arab-emirates_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="united-arab-emirates_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgUnitedArabEmirates;
