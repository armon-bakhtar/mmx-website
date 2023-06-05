import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSanMarino = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#san-marino_svg__a)">
      <rect width={22} height={16} fill="#fff" rx={2} />
      <path
        fill="#3A99FF"
        fillRule="evenodd"
        d="M0 8h22v8H0V8Z"
        clipRule="evenodd"
      />
      <path
        fill="#D4AF2C"
        fillRule="evenodd"
        d="M8.38 4.267h5.239v1.066L10.999 6.4 8.382 5.333V4.267Z"
        clipRule="evenodd"
      />
      <path
        fill="#249F58"
        fillRule="evenodd"
        d="M13.619 9.067c0-1.472-1.173-2.667-2.62-2.667-1.445 0-2.618 1.195-2.618 2.667 0 1.472 1.173 2.666 2.619 2.666 1.446 0 2.619-1.194 2.619-2.666Zm-2.62 1.6c.868 0 1.572-.955 1.572-2.134 0-1.178-.704-2.133-1.571-2.133s-1.572.955-1.572 2.133c0 1.179.704 2.134 1.572 2.134Z"
        clipRule="evenodd"
      />
      <path
        fill="#D4AF2C"
        d="M11 9.6c.29 0 .524-.478.524-1.067S11.289 7.467 11 7.467c-.29 0-.524.477-.524 1.066 0 .59.235 1.067.524 1.067Z"
      />
    </g>
    <defs>
      <clipPath id="san-marino_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSanMarino;
