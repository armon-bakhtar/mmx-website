import * as React from 'react';
import type { SVGProps } from 'react';
const SvgVanuaty = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#vanuaty_svg__a)">
      <g clipPath="url(#vanuaty_svg__b)">
        <path
          fill="#fff"
          d="M19.905 0H2.095C.938 0 0 .955 0 2.133v11.734C0 15.045.938 16 2.095 16h17.81C21.062 16 22 15.045 22 13.867V2.133C22 .955 21.062 0 19.905 0Z"
        />
        <path
          fill="#249F58"
          fillRule="evenodd"
          d="M0 9.6h22V16H0V9.6Z"
          clipRule="evenodd"
        />
        <path
          fill="#AF010D"
          fillRule="evenodd"
          d="M0 0h22v6.4H0V0Z"
          clipRule="evenodd"
        />
        <path
          fill="#151515"
          fillRule="evenodd"
          d="m9.646 9.6-7.55 6.435H0V0h2.095l7.543 6.4H22v3.2H9.646Z"
          clipRule="evenodd"
        />
        <path
          fill="#FFDA2C"
          fillRule="evenodd"
          d="M9.324 8.533.524 16 0 16.035V0h.524l8.8 7.467H22v1.066H9.324Z"
          clipRule="evenodd"
        />
        <path
          fill="#151515"
          fillRule="evenodd"
          d="M0 1.067 8.38 8 0 14.933V1.067Z"
          clipRule="evenodd"
        />
        <path
          fill="#FFDA2C"
          fillRule="evenodd"
          d="M1.732 9.97c-.42-.487-.684-1.19-.684-1.97 0-1.472.937-2.667 2.095-2.667 1.158 0 2.095 1.195 2.095 2.667 0 1.472-.937 2.667-2.095 2.667V9.6c.578 0 1.048-.717 1.048-1.6 0-.883-.47-1.6-1.048-1.6-.578 0-1.048.717-1.048 1.6 0 .49.145.928.371 1.222l-.733.747-.001.001Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="vanuaty_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="vanuaty_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgVanuaty;
