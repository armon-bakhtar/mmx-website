import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSouthAfrica = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#south-africa_svg__a)">
      <g clipPath="url(#south-africa_svg__b)">
        <rect width={22} height={16} fill="#fff" rx={2} />
        <path
          fill="#fff"
          d="M19.905 0H2.095C.938 0 0 .955 0 2.133v11.734C0 15.045.938 16 2.095 16h17.81C21.062 16 22 15.045 22 13.867V2.133C22 .955 21.062 0 19.905 0Z"
        />
        <path
          fill="#1A47B8"
          fillRule="evenodd"
          d="M0 10.667h22V16H0v-5.333Z"
          clipRule="evenodd"
        />
        <path
          fill="#F93939"
          fillRule="evenodd"
          d="M0 0h22v5.333H0V0Z"
          clipRule="evenodd"
        />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="m8.395 10.667-6.3 5.368H0V0h2.095l6.286 5.333H22v5.334H8.395Z"
          clipRule="evenodd"
        />
        <path
          fill="#249F58"
          fillRule="evenodd"
          d="M8.067 9.6.524 16 0 16.035V0h.524l7.543 6.4H22v3.2H8.067Z"
          clipRule="evenodd"
        />
        <path
          fill="#FFDA2C"
          fillRule="evenodd"
          d="M0 3.2 6.286 8 0 12.8V3.2Z"
          clipRule="evenodd"
        />
        <path
          fill="#151515"
          fillRule="evenodd"
          d="M0 4.267 4.976 8 0 11.733V4.267Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="south-africa_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="south-africa_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSouthAfrica;
