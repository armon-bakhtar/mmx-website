import * as React from 'react';
import type { SVGProps } from 'react';
const SvgGuineaBissau = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#guinea-bissau_svg__a)">
      <g clipPath="url(#guinea-bissau_svg__b)">
        <rect width={22} height={16} fill="#FFDA2C" rx={2} />
        <path
          fill="#FFDA2C"
          d="M19.905 0H2.095C.938 0 0 .955 0 2.133v11.734C0 15.045.938 16 2.095 16h17.81C21.062 16 22 15.045 22 13.867V2.133C22 .955 21.062 0 19.905 0Z"
        />
        <path
          fill="#249F58"
          fillRule="evenodd"
          d="M0 8h22v8H0V8Z"
          clipRule="evenodd"
        />
        <path
          fill="#F93939"
          fillRule="evenodd"
          d="M0 0h9v16H0V0Z"
          clipRule="evenodd"
        />
        <path
          fill="#151515"
          fillRule="evenodd"
          d="m4.491 9.333-1.54.825.294-1.746L2 7.174l1.721-.252.77-1.589.77 1.59 1.721.252-1.246 1.238.293 1.745"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="guinea-bissau_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="guinea-bissau_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGuineaBissau;
