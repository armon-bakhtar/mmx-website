import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCross = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      stroke="#B9B9B9"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10 10 3.535 3.536m-7.07 0L10 10l-3.536 3.536Zm7.07-7.072L10 10l3.535-3.536ZM10 10 6.464 6.464 10 10Z"
    />
  </svg>
);
export default SvgCross;
