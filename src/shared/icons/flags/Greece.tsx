import * as React from 'react';
import type { SVGProps } from 'react';
const SvgGreece = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#greece_svg__a)">
      <rect width={22} height={16} fill="#fff" rx={2} />
      <path
        fill="#1A47B8"
        fillRule="evenodd"
        d="M0 0h4.19v4.267H0V0Zm6.286 0h4.19v4.267h-4.19V0ZM0 6.4h4.19v4.267H0V6.4Zm6.286 0h4.19v4.267h-4.19V6.4Zm4.19-6.4H22v2.133H10.476V0Zm0 4.267H22V6.4H10.476V4.267Z"
        clipRule="evenodd"
      />
      <path
        fill="#1A47B8"
        fillRule="evenodd"
        d="M0 8.533h22v2.134H0V8.533Zm4.19 0h2.096v2.134H4.19V8.533ZM0 12.8h22v2.133H0V12.8Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="greece_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGreece;
