import * as React from 'react';
import type { SVGProps } from 'react';
const SvgParaguay = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#paraguay_svg__a)">
      <g clipPath="url(#paraguay_svg__b)">
        <rect width={22} height={16} fill="#fff" rx={2} />
        <path
          fill="#1A47B8"
          fillRule="evenodd"
          d="M0 11h22v5H0v-5Z"
          clipRule="evenodd"
        />
        <path
          fill="#249F58"
          fillRule="evenodd"
          d="M12.96 8c.027.108.04.219.04.333 0 .92-.896 1.667-2 1.667s-2-.747-2-1.667c0-.114.013-.225.04-.333.187.507.992.889 1.96.889s1.773-.382 1.96-.889Z"
          clipRule="evenodd"
        />
        <path
          fill="#FFDA2C"
          d="M11 7c.552 0 1-.224 1-.5s-.448-.5-1-.5-1 .224-1 .5.448.5 1 .5Z"
        />
        <path
          fill="#F93939"
          fillRule="evenodd"
          d="M0 0h22v5H0V0Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="paraguay_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="paraguay_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgParaguay;
