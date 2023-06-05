import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDominicanRepublic = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#dominican-republic_svg__a)">
      <g clipPath="url(#dominican-republic_svg__b)">
        <rect width={22} height={16} fill="#fff" rx={2} />
        <path fill="#1A47B8" d="M0 0h10v6H0z" />
        <path fill="#F93939" d="M13 0h9v6h-9z" />
        <path fill="#1A47B8" d="M13 10h9v6h-9z" />
        <path fill="#F93939" d="M0 10h10v6H0z" />
        <ellipse cx={11.5} cy={8} fill="#249F58" rx={1.5} ry={2} />
        <circle cx={10.5} cy={6.5} r={0.5} fill="#232C80" />
        <circle
          cx={0.5}
          cy={0.5}
          r={0.5}
          fill="#232C80"
          transform="matrix(-1 0 0 1 13 9)"
        />
        <circle cx={12.5} cy={6.5} r={0.5} fill="#F93939" />
        <ellipse cx={11.5} cy={8} fill="#fff" rx={0.5} ry={1} />
        <circle
          cx={0.5}
          cy={0.5}
          r={0.5}
          fill="#F93939"
          transform="matrix(-1 0 0 1 11 9)"
        />
      </g>
    </g>
    <defs>
      <clipPath id="dominican-republic_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="dominican-republic_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDominicanRepublic;
