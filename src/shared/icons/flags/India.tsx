import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIndia = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#india_svg__a)">
      <g clipPath="url(#india_svg__b)">
        <rect width={22} height={16} fill="#fff" rx={2} />
        <path
          fill="#1A47B8"
          fillRule="evenodd"
          d="M11 10.667c1.446 0 2.619-1.195 2.619-2.667 0-1.472-1.173-2.667-2.62-2.667-1.445 0-2.618 1.195-2.618 2.667 0 1.472 1.173 2.667 2.619 2.667ZM11 9.6c.867 0 1.571-.717 1.571-1.6 0-.883-.704-1.6-1.571-1.6S9.428 7.117 9.428 8c0 .883.704 1.6 1.572 1.6Z"
          clipRule="evenodd"
        />
        <path
          fill="#1A47B8"
          d="M11 8.533c.29 0 .524-.238.524-.533A.529.529 0 0 0 11 7.467a.529.529 0 0 0-.524.533c0 .295.235.533.524.533Z"
        />
        <path
          fill="#249F58"
          fillRule="evenodd"
          d="M0 11h22v5H0v-5Z"
          clipRule="evenodd"
        />
        <path
          fill="#FF6C2D"
          fillRule="evenodd"
          d="M0 0h22v5H0V0Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="india_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="india_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIndia;
