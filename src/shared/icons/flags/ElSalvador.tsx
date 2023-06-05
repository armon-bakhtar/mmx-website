import * as React from 'react';
import type { SVGProps } from 'react';
const SvgElSalvador = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#el-salvador_svg__a)">
      <g clipPath="url(#el-salvador_svg__b)">
        <rect width={22} height={16} fill="#fff" rx={2} />
        <path
          fill="#1A47B8"
          fillRule="evenodd"
          d="M0 11h22v5H0v-5ZM0 0h22v5H0V0Z"
          clipRule="evenodd"
        />
        <path
          fill="#1A47B8"
          d="M11 9.6c.868 0 1.572-.716 1.572-1.6 0-.884-.704-1.6-1.572-1.6-.868 0-1.571.716-1.571 1.6 0 .884.703 1.6 1.571 1.6Z"
        />
        <path
          fill="#FFDA2C"
          d="M11 8.533c.29 0 .524-.238.524-.533A.529.529 0 0 0 11 7.467a.529.529 0 0 0-.524.533c0 .295.235.533.524.533Z"
        />
        <path
          fill="#249F58"
          fillRule="evenodd"
          d="m8.38 7.467 1.048 1.066L11 9.6l1.571-1.067 1.048-1.066L12.571 9.6H9.428L8.381 7.467Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="el-salvador_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="el-salvador_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgElSalvador;
