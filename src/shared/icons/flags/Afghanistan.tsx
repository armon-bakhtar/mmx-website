import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAfghanistan = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#afghanistan_svg__a)">
      <g clipPath="url(#afghanistan_svg__b)">
        <path
          fill="#F93939"
          d="M19.905 0H2.095C.938 0 0 .955 0 2.133v11.734C0 15.045.938 16 2.095 16h17.81C21.062 16 22 15.045 22 13.867V2.133C22 .955 21.062 0 19.905 0Z"
        />
        <path
          fill="#151515"
          fillRule="evenodd"
          d="M0 0h7v16H0V0Z"
          clipRule="evenodd"
        />
        <path
          fill="#249F58"
          fillRule="evenodd"
          d="M15 0h7v16h-7V0Z"
          clipRule="evenodd"
        />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M11 10.667c1.446 0 2.619-1.195 2.619-2.667 0-1.472-1.173-2.667-2.62-2.667-1.445 0-2.618 1.195-2.618 2.667 0 1.472 1.173 2.667 2.619 2.667ZM11 9.6c.867 0 1.571-.955 1.571-2.133 0-1.179-.704-2.134-1.571-2.134s-1.572.955-1.572 2.134c0 1.178.704 2.133 1.572 2.133Zm0-1.067c.29 0 .524-.478.524-1.066 0-.59-.235-1.067-.524-1.067-.29 0-.524.478-.524 1.067 0 .588.235 1.066.524 1.066Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="afghanistan_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="afghanistan_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAfghanistan;
