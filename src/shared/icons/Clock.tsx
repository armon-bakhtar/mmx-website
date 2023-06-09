import * as React from 'react';
import type { SVGProps } from 'react';
const SvgClock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      stroke="#E3FF77"
      strokeMiterlimit={10}
      strokeWidth={2.125}
      d="M16 28c6.075 0 11-4.925 11-11S22.075 6 16 6 5 10.925 5 17s4.925 11 11 11Z"
    />
    <path
      stroke="#E3FF77"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.125}
      d="m16 17 4.95-4.95M13 2h6"
    />
  </svg>
);
export default SvgClock;
