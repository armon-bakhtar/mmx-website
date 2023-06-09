import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAruba = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#aruba_svg__a)">
      <g clipPath="url(#aruba_svg__b)">
        <rect width={22} height={16} fill="#3ECBF8" rx={2} />
        <path
          fill="#3ECBF8"
          d="M19.905 0H2.095C.938 0 0 .955 0 2.133v11.734C0 15.045.938 16 2.095 16h17.81C21.062 16 22 15.045 22 13.867V2.133C22 .955 21.062 0 19.905 0Z"
        />
        <path
          fill="#F93939"
          fillRule="evenodd"
          d="M4.699 4.784c.911-.059 1.587-.267 1.587-.517s-.676-.459-1.587-.518c-.058-.928-.262-1.616-.509-1.616-.245 0-.45.688-.508 1.616-.911.059-1.587.267-1.587.518 0 .25.676.458 1.587.517.058.928.262 1.616.508 1.616s.45-.688.509-1.616Z"
          clipRule="evenodd"
        />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M4.698 4.784c.912-.059 1.588-.267 1.588-.517s-.676-.459-1.588-.518c-.057-.928-.261-1.616-.508-1.616-.245 0-.45.688-.508 1.616-.911.059-1.587.267-1.587.518 0 .25.676.458 1.587.517.058.928.262 1.616.508 1.616.245 0 .45-.688.508-1.616Zm.032.533.492-.501c-.078 1.278-.34 2.117-1.032 2.117-.691 0-.953-.84-1.03-2.116l.49.5c-1.253-.08-2.079-.346-2.079-1.05 0-.704.826-.971 2.079-1.05l-.49.5C3.236 2.44 3.498 1.6 4.19 1.6c.692 0 .954.84 1.031 2.116l-.49-.499c1.253.079 2.078.346 2.078 1.05 0 .704-.825.97-2.078 1.05H4.73Z"
          clipRule="evenodd"
        />
        <path
          fill="#FFDA2C"
          fillRule="evenodd"
          d="M0 10h22v1H0v-1Zm0 2h22v1H0v-1Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="aruba_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="aruba_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAruba;
