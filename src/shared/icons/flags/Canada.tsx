import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCanada = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#canada_svg__a)">
      <g clipPath="url(#canada_svg__b)">
        <rect width={22} height={16} fill="#fff" rx={2} />
        <path
          fill="#F93939"
          d="M11.235 12h-.47l.117-1.73c-.006-.09-.054-.115-.235-.108l-1.882.216s.353-.432.353-.648C9.118 9.514 7 8.108 7 8.108s.47-.108.588-.216-.47-1.297-.47-1.297 1.195.432 1.294.324c.098-.108.235-.54.235-.54s.941.972 1.177.972c.235 0-.471-2.378-.471-2.378s.588.432.824.432C10.412 5.405 11 4 11 4s.588 1.405.706 1.405c.117 0 .941-.432.941-.432s-.588 2.27-.47 2.378c.117.108 1.176-.973 1.176-.973s.118.433.235.54c.118.109 1.294-.323 1.294-.323s-.588 1.189-.47 1.297c.117.108.588.216.588.216s-2.118 1.406-2.118 1.622c0 .216.236.648.236.648l-1.765-.216c-.142-.037-.191-.009-.235.108l.117 1.73ZM17 0h5v16h-5zM0 0h5v16H0z"
        />
      </g>
    </g>
    <defs>
      <clipPath id="canada_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="canada_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCanada;
