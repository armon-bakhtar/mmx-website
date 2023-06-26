import * as React from 'react';
import type { SVGProps } from 'react';
const SvgOkCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={56}
    height={56}
    fill="none"
    viewBox="0 0 56 56"
    {...props}
  >
    <rect
      width={56}
      height={56}
      x={0.5}
      fill="#fff"
      fillOpacity={0.25}
      rx={28}
    />
    <path
      fill="#E3FF77"
      d="M28.5 42.4c7.953 0 14.4-6.447 14.4-14.4s-6.447-14.4-14.4-14.4S14.1 20.047 14.1 28s6.447 14.4 14.4 14.4Z"
    />
    <path stroke="#04000D" strokeWidth={1.6} d="m22.9 28 4.8 4 6.4-8" />
  </svg>
);
export default SvgOkCircle;
