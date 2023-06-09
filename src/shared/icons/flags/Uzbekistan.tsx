import * as React from 'react';
import type { SVGProps } from 'react';
const SvgUzbekistan = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#uzbekistan_svg__a)">
      <g clipPath="url(#uzbekistan_svg__b)">
        <rect width={22} height={16} fill="#F93939" rx={2} />
        <path
          fill="#00B731"
          fillRule="evenodd"
          d="M0 12h22v4H0v-4Z"
          clipRule="evenodd"
        />
        <path
          fill="#03BCDB"
          fillRule="evenodd"
          d="M0 0h22v4H0V0Z"
          clipRule="evenodd"
        />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M0 5.444h22V11H0V5.444ZM5.238 4.24c-.163.061-.34.094-.524.094-.867 0-1.571-.746-1.571-1.666 0-.92.704-1.667 1.571-1.667.184 0 .36.033.524.094-.61.23-1.048.847-1.048 1.573 0 .725.437 1.344 1.048 1.572Z"
          clipRule="evenodd"
        />
        <path
          fill="#1A47B8"
          fillRule="evenodd"
          d="M6 2h1.2v1H6V2Zm1.2-1h1.2v1H7.2V1Zm1.2 1h1.2v1H8.4V2Zm1.2-1h1.2v1H9.6V1Zm1.2 1H12v1h-1.2V2ZM9.6 3h1.2v1H9.6V3ZM7.2 3h1.2v1H7.2V3Z"
          clipRule="evenodd"
          opacity={0.5}
        />
      </g>
    </g>
    <defs>
      <clipPath id="uzbekistan_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="uzbekistan_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgUzbekistan;
