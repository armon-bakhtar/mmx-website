import * as React from 'react';
import type { SVGProps } from 'react';
const SvgGrowSales = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      fill="#E3FF77"
      d="M30 7v8a1 1 0 0 1-1.707.707L25 12.414l-7.293 7.293a1 1 0 0 1-1.414 0L12 15.414l-8.293 8.293a1 1 0 0 1-1.414-1.414l9-9a1 1 0 0 1 1.414 0L17 17.586 23.586 11l-3.293-3.293A.999.999 0 0 1 21 6h8a1 1 0 0 1 1 1Z"
    />
  </svg>
);
export default SvgGrowSales;
