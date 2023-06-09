import * as React from 'react';
import type { SVGProps } from 'react';
const SvgEritrea = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#eritrea_svg__a)">
      <g clipPath="url(#eritrea_svg__b)">
        <rect width={22} height={16} fill="#3A99FF" rx={2} />
        <path
          fill="#3A99FF"
          d="M19.905 0H2.095C.938 0 0 .955 0 2.133v11.734C0 15.045.938 16 2.095 16h17.81C21.062 16 22 15.045 22 13.867V2.133C22 .955 21.062 0 19.905 0Z"
        />
        <path
          fill="#249F58"
          fillRule="evenodd"
          d="M0 0h22v8H0V0Z"
          clipRule="evenodd"
        />
        <path
          fill="#F93939"
          fillRule="evenodd"
          d="m0 0 22 8-22 8V0Z"
          clipRule="evenodd"
        />
        <path
          fill="#FFDA2C"
          fillRule="evenodd"
          d="M9.429 8c0-1.472-1.174-2.667-2.62-3.2-1.445.533-2.618 1.728-2.618 3.2 0 1.29.9 2.366 2.095 2.613V6.931c0-.293.243-.531.524-.531.289 0 .524.23.524.531v3.682C8.528 10.366 9.429 9.291 9.429 8Zm1.047 0c0-2.062-1.641-3.733-3.666-3.2C4.785 4.267 3.143 5.938 3.143 8c0 2.062 1.642 3.733 3.667 3.733S10.476 10.062 10.476 8Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="eritrea_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="eritrea_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgEritrea;
