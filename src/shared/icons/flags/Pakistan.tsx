import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPakistan = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#pakistan_svg__a)">
      <rect width={22} height={16} fill="#0A6A30" rx={2} />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M16.735 6.372c-.07.636-.266 1.095-.497 1.095-.23 0-.427-.459-.496-1.095-.625-.07-1.075-.27-1.075-.505s.45-.436 1.075-.506c.069-.636.266-1.094.496-1.094.23 0 .428.458.497 1.094.624.07 1.075.271 1.075.506 0 .234-.451.435-1.075.505ZM0 0h6v16H0V0Z"
        clipRule="evenodd"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M18.826 7.433c.02.186.031.375.031.567 0 2.65-2.11 4.8-4.714 4.8-2.603 0-4.714-2.15-4.714-4.8s2.11-4.8 4.714-4.8c.189 0 .374.01.557.032-1.793.245-3.176 1.81-3.176 3.701 0 2.062 1.642 3.734 3.667 3.734 1.858 0 3.394-1.408 3.635-3.234Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="pakistan_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPakistan;
