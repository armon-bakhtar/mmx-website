import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAngola = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#angola_svg__a)">
      <g clipPath="url(#angola_svg__b)">
        <rect width={22} height={16} fill="#F93939" rx={2} />
        <path
          fill="#F93939"
          d="M19.905 0H2.095C.938 0 0 .955 0 2.133v11.734C0 15.045.938 16 2.095 16h17.81C21.062 16 22 15.045 22 13.867V2.133C22 .955 21.062 0 19.905 0Z"
        />
        <path
          fill="#151515"
          fillRule="evenodd"
          d="M0 8h22v8H0V8Z"
          clipRule="evenodd"
        />
        <path
          fill="#FFDA2C"
          fillRule="evenodd"
          d="M13.044 10.225c.455-.62.723-1.39.723-2.225a3.737 3.737 0 0 0-2.287-3.46l-.634.903A2.662 2.662 0 0 1 12.72 8c0 .634-.217 1.216-.579 1.672L8.529 7.467l2.824 2.875a2.57 2.57 0 0 1-1.253.325 2.6 2.6 0 0 1-2.133-1.12l-.633.903a3.63 3.63 0 0 0 2.766 1.283c.744 0 1.438-.226 2.016-.614l.603.614 1.048-1.066-.723-.442ZM8.53 5.333h1.047V6.4H8.53V5.333Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="angola_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="angola_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAngola;
