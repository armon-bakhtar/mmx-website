import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIran = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#iran_svg__a)">
      <g clipPath="url(#iran_svg__b)">
        <rect width={22} height={16} fill="#fff" rx={2} />
        <path
          fill="#F93939"
          fillRule="evenodd"
          d="M11 9.6c1.446 0 2.619-.717 2.619-1.6 0-.883-1.173-1.6-2.62-1.6-1.445 0-2.618.717-2.618 1.6 0 .883 1.173 1.6 2.619 1.6Zm0-.8c.867 0 1.571-.538 1.571-1.2 0-.661-.704-1.2-1.571-1.2s-1.572.538-1.572 1.2c0 .661.704 1.2 1.572 1.2Z"
          clipRule="evenodd"
        />
        <path
          fill="#AF010D"
          d="M11 8.533c.29 0 .524-.477.524-1.066 0-.59-.235-1.067-.524-1.067-.29 0-.524.478-.524 1.067s.235 1.066.524 1.066Z"
        />
        <path
          fill="#F93939"
          fillRule="evenodd"
          d="M0 11h22v5H0v-5Z"
          clipRule="evenodd"
        />
        <path
          fill="#00B731"
          fillRule="evenodd"
          d="M0 0h22v5H0V0Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="iran_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="iran_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIran;
