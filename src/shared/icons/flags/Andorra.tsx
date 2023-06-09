import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAndorra = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#andorra_svg__a)">
      <g clipPath="url(#andorra_svg__b)">
        <path
          fill="#FFDA2C"
          d="M19.905 0H2.095C.938 0 0 .955 0 2.133v11.734C0 15.045.938 16 2.095 16h17.81C21.062 16 22 15.045 22 13.867V2.133C22 .955 21.062 0 19.905 0Z"
        />
        <path
          fill="#1A47B8"
          fillRule="evenodd"
          d="M0 0h7v16H0V0Z"
          clipRule="evenodd"
        />
        <path
          fill="#F93939"
          fillRule="evenodd"
          d="M15 0h7v16h-7V0Z"
          clipRule="evenodd"
        />
        <path
          fill="#D4AF2C"
          fillRule="evenodd"
          d="M12.504 10.597a1.599 1.599 0 0 0 1.115-1.53v-3.2c0-.891-.704-1.6-1.572-1.6H9.952c-.865 0-1.571.714-1.571 1.6v3.2c0 .727.47 1.333 1.115 1.531A1.57 1.57 0 0 0 11 11.733c.714 0 1.31-.48 1.504-1.136Z"
          clipRule="evenodd"
        />
        <path
          fill="#AF010D"
          fillRule="evenodd"
          d="M9.429 5.333h1.047v1.6H9.43v-1.6Zm2.095 2.134h1.048v1.6h-1.048v-1.6Z"
          clipRule="evenodd"
        />
        <path
          fill="#FFDA2C"
          fillRule="evenodd"
          d="M11.524 5.333h1.048v1.6h-1.048v-1.6ZM9.429 7.467h1.047v1.6H9.43v-1.6Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="andorra_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="andorra_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAndorra;
