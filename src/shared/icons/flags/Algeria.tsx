import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAlgeria = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#algeria_svg__a)">
      <g clipPath="url(#algeria_svg__b)">
        <rect width={22} height={16} fill="#fff" rx={2} />
        <path
          fill="#fff"
          d="M19.905 0H2.095C.938 0 0 .955 0 2.133v11.734C0 15.045.938 16 2.095 16h17.81C21.062 16 22 15.045 22 13.867V2.133C22 .955 21.062 0 19.905 0Z"
        />
        <path
          fill="#249F58"
          fillRule="evenodd"
          d="M0 0h11v16H0V0Z"
          clipRule="evenodd"
        />
        <path
          fill="#F93939"
          fillRule="evenodd"
          d="M13.674 10.947A4.674 4.674 0 0 1 9.953 12.8c-2.604 0-4.715-2.15-4.715-4.8S7.35 3.2 9.953 3.2c1.512 0 2.86.725 3.72 1.853a4.04 4.04 0 0 0-2.41-.786c-2.17 0-3.93 1.671-3.93 3.733 0 2.062 1.76 3.733 3.93 3.733a4.04 4.04 0 0 0 2.41-.786Z"
          clipRule="evenodd"
        />
        <path
          fill="#F93939"
          fillRule="evenodd"
          d="m13.62 8 1.047-.533.524-1.067.523 1.067L16.762 8l-1.048.533-.523 1.067-.524-1.067L13.619 8Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="algeria_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="algeria_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAlgeria;
