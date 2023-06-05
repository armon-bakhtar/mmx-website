import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#togo_svg__a)">
      <g clipPath="url(#togo_svg__b)">
        <rect width={22} height={16} fill="#FFDA2C" rx={2} />
        <path
          fill="#0A6A30"
          fillRule="evenodd"
          d="M7.333 0H22v3.2H7.333V0Zm0 6.4H22v3.2H7.333V6.4ZM0 12.8h22V16H0v-3.2Z"
          clipRule="evenodd"
        />
        <path
          fill="#F93939"
          fillRule="evenodd"
          d="M0 0h9.429v9.6H0V0Z"
          clipRule="evenodd"
        />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="m4.651 6.29-1.58.846.302-1.792-1.278-1.266 1.766-.261.79-1.63.79 1.628 1.767.262-1.279 1.27.302 1.789"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="togo_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="togo_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTogo;
