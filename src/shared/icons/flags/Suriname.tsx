import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSuriname = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#suriname_svg__a)">
      <g clipPath="url(#suriname_svg__b)">
        <rect width={22} height={16} fill="#fff" rx={2} />
        <path
          fill="#0A6A30"
          fillRule="evenodd"
          d="M0 11.733h22V16H0v-4.267ZM0 0h22v4.267H0V0Z"
          clipRule="evenodd"
        />
        <path
          fill="#1A47B8"
          fillRule="evenodd"
          d="M0 11.733h22V16H0v-4.267ZM0 0h22v4.267H0V0Z"
          clipRule="evenodd"
          opacity={0.2}
        />
        <path
          fill="#AF010D"
          fillRule="evenodd"
          d="M0 5h22v6H0V5Z"
          clipRule="evenodd"
        />
        <path
          fill="#FFDA2C"
          fillRule="evenodd"
          d="M11 9.145 9.764 10l.235-1.81L9 6.908l1.382-.262L11 5l.618 1.647L13 6.91l-1 1.282.235 1.809"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="suriname_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="suriname_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSuriname;
