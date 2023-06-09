import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPanama = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#panama_svg__a)">
      <g clipPath="url(#panama_svg__b)">
        <rect width={22} height={16} fill="#fff" rx={2} />
        <path
          fill="#fff"
          d="M19.905 0H2.095C.938 0 0 .955 0 2.133v11.734C0 15.045.938 16 2.095 16h17.81C21.062 16 22 15.045 22 13.867V2.133C22 .955 21.062 0 19.905 0Z"
        />
        <path
          fill="#1A47B8"
          fillRule="evenodd"
          d="M6.258 5.306C6.19 5.94 5.992 6.4 5.762 6.4c-.23 0-.428-.459-.497-1.094-.624-.07-1.075-.271-1.075-.506s.45-.435 1.075-.506c.07-.635.266-1.094.497-1.094.23 0 .427.459.496 1.094.625.07 1.075.271 1.075.506s-.45.435-1.075.506Z"
          clipRule="evenodd"
        />
        <path
          fill="#F93939"
          fillRule="evenodd"
          d="M16.735 12.772c-.07.636-.267 1.095-.497 1.095-.23 0-.428-.459-.497-1.095-.624-.07-1.075-.27-1.075-.505s.451-.435 1.075-.506c.07-.636.265-1.094.497-1.094.23 0 .427.458.497 1.094.624.07 1.074.27 1.074.506 0 .234-.45.435-1.075.505Z"
          clipRule="evenodd"
        />
        <path
          fill="#1A47B8"
          fillRule="evenodd"
          d="M0 8h11v8H0V8Z"
          clipRule="evenodd"
        />
        <path
          fill="#F93939"
          fillRule="evenodd"
          d="M11 0h11v8H11V0Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="panama_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="panama_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPanama;
