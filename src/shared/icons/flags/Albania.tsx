import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAlbania = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#albania_svg__a)">
      <g clipPath="url(#albania_svg__b)">
        <rect width={22} height={16} fill="#F93939" rx={2} />
        <path
          fill="#F93939"
          d="M19.905 0H2.095C.938 0 0 .955 0 2.133v11.734C0 15.045.938 16 2.095 16h17.81C21.062 16 22 15.045 22 13.867V2.133C22 .955 21.062 0 19.905 0Z"
        />
        <path
          fill="#151515"
          fillRule="evenodd"
          d="M11 4.267 9.428 3.2 8.381 4.267h1.047L8.381 5.333 6.286 4.267V9.6l3.143-1.067-1.048 2.134H7.333l1.048 1.066 1.047-1.066L11 12.8V4.267ZM12.57 3.2l1.048 1.067h-1.048l1.048 1.066 2.095-1.066V9.6l-3.143-1.067 1.048 2.134h1.048l-1.048 1.066-1.048-1.066L11 12.8V4.267L12.57 3.2Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="albania_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="albania_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAlbania;
