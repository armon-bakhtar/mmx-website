import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBhutan = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#bhutan_svg__a)">
      <g clipPath="url(#bhutan_svg__b)">
        <rect width={22} height={16} fill="#FF6C2D" rx={2} />
        <path
          fill="#FF6C2D"
          d="M19.905 0H2.095C.938 0 0 .955 0 2.133v11.734C0 15.045.938 16 2.095 16h17.81C21.062 16 22 15.045 22 13.867V2.133C22 .955 21.062 0 19.905 0Z"
        />
        <path
          fill="#FFDA2C"
          fillRule="evenodd"
          d="M0 16 22 0H0v16Z"
          clipRule="evenodd"
        />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="m3.143 10.667.524 1.6 2.095.533.524-1.067 4.19.534L9.43 9.6h2.095l3.143 1.067L15.714 9.6l-3.142-1.067 1.047-1.066h3.143l.524-1.067h-2.62V5.333h2.096l1.048-1.066L13.62 3.2l-2.096 2.133L10.476 6.4l1.048 1.067-3.143-.534-2.095 3.734-1.048 1.066-2.095-1.066Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="bhutan_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="bhutan_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBhutan;
