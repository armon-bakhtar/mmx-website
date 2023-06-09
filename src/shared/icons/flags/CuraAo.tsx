import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCuraAo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#cura-ao_svg__a)">
      <rect width={22} height={16} fill="#1A47B8" rx={2} />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M5.238 5.333H4.71a.522.522 0 0 0-.52.534c0 .286.233.533.52.533h.528v.538c0 .299.235.529.524.529.281 0 .524-.237.524-.529V6.4h.529a.522.522 0 0 0 .519-.533.532.532 0 0 0-.52-.534h-.528v-.538a.522.522 0 0 0-.524-.528.532.532 0 0 0-.524.528v.538ZM3.143 3.2h1.048v1.067H3.143V3.2Z"
        clipRule="evenodd"
      />
      <path fill="#FFDA2C" d="M22 10H0v2h22v-2Z" />
    </g>
    <defs>
      <clipPath id="cura-ao_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCuraAo;
