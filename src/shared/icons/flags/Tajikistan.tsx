import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTajikistan = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#tajikistan_svg__a)">
      <g clipPath="url(#tajikistan_svg__b)">
        <rect width={22} height={16} fill="#fff" rx={2} />
        <path
          fill="#249F58"
          fillRule="evenodd"
          d="M0 11h22v5H0v-5Z"
          clipRule="evenodd"
        />
        <path
          fill="#FFDA2C"
          fillRule="evenodd"
          d="M12.54 7.68c.021.103.032.21.032.32 0 .883-.704 1.6-1.572 1.6-.867 0-1.571-.717-1.571-1.6 0-.11.01-.217.031-.32.147.486.78.853 1.54.853s1.393-.367 1.54-.853ZM11 7.467c.29 0 .524-.24.524-.534A.529.529 0 0 0 11 6.4a.529.529 0 0 0-.524.533c0 .295.235.534.524.534Z"
          clipRule="evenodd"
        />
        <path
          fill="#AF010D"
          fillRule="evenodd"
          d="M0 0h22v5H0V0Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="tajikistan_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="tajikistan_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTajikistan;
