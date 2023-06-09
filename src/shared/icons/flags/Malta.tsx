import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMalta = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#malta_svg__a)">
      <rect width={22} height={16} fill="#AF010D" rx={2} />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M0 0h11.524v16H0V0Z"
        clipRule="evenodd"
      />
      <path
        fill="#CBCBCB"
        fillRule="evenodd"
        d="M3.143 3.2H2.095v1.067h1.048v1.066H4.19V4.267h1.048V3.2H4.19V2.133H3.143V3.2Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="malta_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMalta;
