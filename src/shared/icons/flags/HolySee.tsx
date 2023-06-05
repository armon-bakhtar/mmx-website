import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHolySee = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#holy-see_svg__a)">
      <g clipPath="url(#holy-see_svg__b)">
        <path
          fill="#FFDA2C"
          fillRule="evenodd"
          d="M0 0h8.38v16H0V0Z"
          clipRule="evenodd"
        />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M8.38 0h8.382v16H8.38V0Z"
          clipRule="evenodd"
        />
        <path stroke="#CBCBCB" d="m10.476 6.4 3.143 3.2" />
        <path stroke="#FF6C2D" d="M12.048 8v2.667" opacity={0.6} />
        <path
          fill="#D4AF2C"
          fillRule="evenodd"
          d="M10.476 6.4h3.143l-1.572-2.133-1.57 2.133Z"
          clipRule="evenodd"
        />
        <path stroke="#D4AF2C" d="m13.619 6.4-3.143 3.2" />
      </g>
    </g>
    <defs>
      <clipPath id="holy-see_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="holy-see_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHolySee;
