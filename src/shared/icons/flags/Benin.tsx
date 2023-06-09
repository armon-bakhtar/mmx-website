import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBenin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#benin_svg__a)">
      <g clipPath="url(#benin_svg__b)">
        <rect width={22} height={16} fill="#FFDA2C" rx={2} />
        <path
          fill="#FFDA2C"
          d="M19.905 0H2.095C.938 0 0 .955 0 2.133v11.734C0 15.045.938 16 2.095 16h17.81C21.062 16 22 15.045 22 13.867V2.133C22 .955 21.062 0 19.905 0Z"
        />
        <path
          fill="#F93939"
          fillRule="evenodd"
          d="M8 9h14v7H8V9Z"
          clipRule="evenodd"
        />
        <path
          fill="#249F58"
          fillRule="evenodd"
          d="M0 0h8v16H0V0Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="benin_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="benin_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBenin;
