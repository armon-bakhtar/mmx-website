import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPhilippines = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#philippines_svg__a)">
      <g clipPath="url(#philippines_svg__b)">
        <rect width={22} height={16} fill="#F93939" rx={2} />
        <path
          fill="#1A47B8"
          fillRule="evenodd"
          d="M0 0h22v8H0V0Z"
          clipRule="evenodd"
        />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M0 0v16l10-8.018L0 0Z"
          clipRule="evenodd"
        />
        <path
          fill="#FFDA2C"
          fillRule="evenodd"
          d="M4.485 8.485C5.355 8.43 6 8.235 6 8c0-.234-.645-.43-1.515-.485C4.43 6.645 4.235 6 4 6c-.234 0-.43.645-.485 1.515C2.645 7.57 2 7.765 2 8c0 .234.645.43 1.515.485.054.87.25 1.515.485 1.515.234 0 .43-.645.485-1.515Z"
          clipRule="evenodd"
        />
        <path
          fill="#FFDA2C"
          d="M7.5 9c.276 0 .5-.448.5-1s-.224-1-.5-1-.5.448-.5 1 .224 1 .5 1ZM2.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM2.5 12a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
        />
      </g>
    </g>
    <defs>
      <clipPath id="philippines_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="philippines_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPhilippines;
