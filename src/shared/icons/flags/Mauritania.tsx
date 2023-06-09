import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMauritania = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#mauritania_svg__a)">
      <g clipPath="url(#mauritania_svg__b)">
        <rect width={22} height={16} fill="#249F58" rx={2} />
        <path
          fill="#FFDA2C"
          fillRule="evenodd"
          d="m10.998 7.733-1.54.825.293-1.746-1.244-1.238 1.721-.252.77-1.59.769 1.59 1.721.252-1.246 1.238.295 1.745"
          clipRule="evenodd"
        />
        <path
          fill="#FFDA2C"
          fillRule="evenodd"
          d="M15.678 6.334c.024.196.036.397.036.6 0 2.65-2.11 4.8-4.714 4.8-2.603 0-4.714-2.15-4.714-4.8 0-.203.012-.404.036-.601C6.612 8.176 8.596 9.6 11 9.6s4.387-1.425 4.678-3.267Z"
          clipRule="evenodd"
        />
        <path fill="#AF010D" d="M0 0h22v2.133H0zM0 13.867h22V16H0z" />
      </g>
    </g>
    <defs>
      <clipPath id="mauritania_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="mauritania_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMauritania;
