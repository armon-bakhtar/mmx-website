import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBurgerMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <path fill="#fff" d="M3 7h34v2H3zM3 19h34v2H3zM3 31h34v2H3z" />
  </svg>
);
export default SvgBurgerMenu;
