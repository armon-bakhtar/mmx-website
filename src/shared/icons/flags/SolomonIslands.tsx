import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSolomonIslands = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#solomon-islands_svg__a)">
      <g clipPath="url(#solomon-islands_svg__b)">
        <rect width={22} height={16} fill="#1A47B8" rx={2} />
        <path
          fill="#FFDA2C"
          fillRule="evenodd"
          d="M0 16h22V0L0 16Z"
          clipRule="evenodd"
        />
        <path
          fill="#249F58"
          fillRule="evenodd"
          d="M2.095 16H22V2.133L2.095 16Z"
          clipRule="evenodd"
        />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="m5.366 6.035-.647.365.123-.772-.524-.546.723-.113.325-.702.325.702.723.113-.524.546.123.772-.647-.365ZM3.271 3.902l-.648.365.124-.773-.524-.546.723-.113.325-.702.325.702.722.113-.523.546.123.773-.647-.365Zm4.19 0-.647.365.123-.773-.523-.546.722-.113.325-.702.325.702.723.113-.524.546.124.773-.648-.365Zm0 4.267-.647.364.123-.772-.523-.546.722-.113.325-.702.325.702.723.113-.524.546.124.772-.648-.364Zm-4.19 0-.648.364.124-.772-.524-.546.723-.113.325-.702.325.702.722.113-.523.546.123.772-.647-.364Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="solomon-islands_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="solomon-islands_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSolomonIslands;
