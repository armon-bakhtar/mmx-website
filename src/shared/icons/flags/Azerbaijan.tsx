import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAzerbaijan = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#azerbaijan_svg__a)">
      <g clipPath="url(#azerbaijan_svg__b)">
        <path
          fill="#F93939"
          d="M19.905 0H2.095C.938 0 0 .955 0 2.133v11.734C0 15.045.938 16 2.095 16h17.81C21.062 16 22 15.045 22 13.867V2.133C22 .955 21.062 0 19.905 0Z"
        />
        <path
          fill="#249F58"
          fillRule="evenodd"
          d="M0 11h22v5H0v-5Z"
          clipRule="evenodd"
        />
        <path
          fill="#3ECBF8"
          fillRule="evenodd"
          d="M0 0h22v5H0V0Z"
          clipRule="evenodd"
        />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M12.571 7.467h1.048v1.066H12.57V7.467Z"
          clipRule="evenodd"
        />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M13.095 9.6A2.6 2.6 0 0 1 11 10.667c-1.446 0-2.62-1.195-2.62-2.667 0-1.472 1.174-2.667 2.62-2.667A2.6 2.6 0 0 1 13.095 6.4h-1.571c-.868 0-1.572.717-1.572 1.6 0 .883.704 1.6 1.572 1.6h1.571Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="azerbaijan_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="azerbaijan_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAzerbaijan;
