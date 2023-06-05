import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBurkinaFaso = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#burkina-faso_svg__a)">
      <g clipPath="url(#burkina-faso_svg__b)">
        <rect width={22} height={16} fill="#F93939" rx={2} />
        <path
          fill="#F93939"
          d="M19.905 0H2.095C.938 0 0 .955 0 2.133v11.734C0 15.045.938 16 2.095 16h17.81C21.062 16 22 15.045 22 13.867V2.133C22 .955 21.062 0 19.905 0Z"
        />
        <path
          fill="#249F58"
          fillRule="evenodd"
          d="M0 8h22v8H0V8Z"
          clipRule="evenodd"
        />
        <path
          fill="#FFDA2C"
          fillRule="evenodd"
          d="M11 9.867 8.845 11.02l.412-2.443L7.51 6.845l2.41-.356L11 4.267l1.079 2.223 2.41.356-1.746 1.731.412 2.445"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="burkina-faso_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="burkina-faso_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBurkinaFaso;
