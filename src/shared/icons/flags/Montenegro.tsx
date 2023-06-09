import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMontenegro = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#montenegro_svg__a)">
      <rect width={22} height={16} fill="#D4AF2C" rx={2} />
      <path fill="#AF010D" d="M1.048 1.067h19.905v13.867H1.048z" />
      <path
        fill="#D4AF2C"
        fillRule="evenodd"
        d="m11 5.097-1.222-.83-.814.83h.814l-.814.83-1.63-.83v4.149l2.444-.832-.814 1.66h-.815l.815.83.814-.83L11 11.734V5.096Zm1.223-.83.814.83h-.814l.814.83 1.63-.83v4.149l-2.444-.832.814 1.66h.815l-.815.83-.814-.83L11 11.734V5.096l1.223-.83Z"
        clipRule="evenodd"
      />
      <path
        fill="#1A47B8"
        fillRule="evenodd"
        d="M9.429 6.939c0-.886.697-1.606 1.571-1.606.868 0 1.572.718 1.572 1.606v-.366c0 .885-.533 2.086-1.174 2.669L11 9.6l-.398-.358c-.646-.587-1.173-1.782-1.173-2.67v.367Z"
        clipRule="evenodd"
      />
      <path
        fill="#AE6A3E"
        fillRule="evenodd"
        d="M9.429 6.4h3.143v1.067H9.429V6.4Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="montenegro_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMontenegro;
