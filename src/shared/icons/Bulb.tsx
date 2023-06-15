import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBulb = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      stroke="#E3FF77"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13.333 22.211v3.122a2.667 2.667 0 1 0 5.334 0v-3.122M16 4v1.333M5.333 16H4m3.467-8.533-.8-.8m17.333.8.8-.8M28 16h-1.333m-4 0a6.667 6.667 0 1 1-13.334 0 6.667 6.667 0 0 1 13.334 0Z"
    />
  </svg>
);
export default SvgBulb;
