import * as React from 'react';
import type { SVGProps } from 'react';
const SvgRwanda = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#rwanda_svg__a)">
      <g clipPath="url(#rwanda_svg__b)">
        <rect width={22} height={16} fill="#FFDA2C" rx={2} />
        <path
          fill="#0A6A30"
          fillRule="evenodd"
          d="M0 12h22v4H0v-4Z"
          clipRule="evenodd"
        />
        <path
          fill="#03BCDB"
          fillRule="evenodd"
          d="M0 0h22v7H0V0Z"
          clipRule="evenodd"
        />
        <path
          fill="#FFDA2C"
          fillRule="evenodd"
          d="M17.782 4.239c.625-.07 1.075-.271 1.075-.506 0-.234-.45-.435-1.075-.505-.069-.636-.266-1.095-.496-1.095-.23 0-.428.459-.497 1.095-.624.07-1.075.27-1.075.505s.45.436 1.075.506c.07.636.266 1.094.497 1.094.23 0 .427-.458.496-1.094Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="rwanda_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="rwanda_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRwanda;
