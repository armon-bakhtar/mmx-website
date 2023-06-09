import * as React from 'react';
import type { SVGProps } from 'react';
const SvgGuatemala = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#guatemala_svg__a)">
      <g clipPath="url(#guatemala_svg__b)">
        <rect width={22} height={16} fill="#fff" rx={2} />
        <path fill="#3ECBF8" d="M16 0h6v16h-6zM0 0h6v16H0z" />
        <path
          fill="#FFDA2C"
          d="M11.5 9c.276 0 .5-.448.5-1s-.224-1-.5-1-.5.448-.5 1 .224 1 .5 1Z"
        />
        <path
          fill="#249F58"
          fillRule="evenodd"
          d="M14 8.5a2.5 2.5 0 0 0-5 0 2.5 2.5 0 0 0 5 0ZM11.5 10c.828 0 1.5-.895 1.5-2s-.672-2-1.5-2-1.5.895-1.5 2 .672 2 1.5 2Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="guatemala_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="guatemala_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGuatemala;
