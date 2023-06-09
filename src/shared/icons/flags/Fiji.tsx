import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFiji = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#fiji_svg__a)">
      <rect width={22} height={16} fill="#3ECBF8" rx={2} />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M18.857 10.667V6.933c0-.89-.704-1.6-1.571-1.6H15.19c-.866 0-1.572.715-1.572 1.6v3.734c0 .194 1.048 2.133 2.62 2.133 1.57 0 2.618-1.945 2.618-2.133Z"
        clipRule="evenodd"
      />
      <path
        fill="#F93939"
        fillRule="evenodd"
        d="M16.762 8.533v1.193h2.095v1.026h-2.095V12.8h-1.048v-2.048H13.62V9.726h2.095V8.533H13.62v-3.2h5.238v3.2h-2.095Z"
        clipRule="evenodd"
      />
      <path
        fill="#FFDA2C"
        fillRule="evenodd"
        d="M14.666 6.4h3.143v1.067h-3.143V6.4Z"
        clipRule="evenodd"
      />
      <path
        fill="#fff"
        d="M9.429 1.067H2.095c-.578 0-1.047.477-1.047 1.066v5.334c0 .589.469 1.066 1.047 1.066H9.43c.578 0 1.047-.477 1.047-1.066V2.133c0-.589-.469-1.066-1.047-1.066Z"
      />
      <path
        fill="#F93939"
        fillRule="evenodd"
        d="M5.238 5.333H2.095V4.267h3.143V2.133h1.048v2.134h3.143v1.066H6.286v2.134H5.238V5.333ZM7.858 6.4v1.067h1.57V6.4h-1.57Zm0-4.267V3.2h1.57V2.133h-1.57ZM2.094 6.4v1.067h1.572V6.4H2.095Zm0-4.267V3.2h1.572V2.133H2.095Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="fiji_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFiji;
