import * as React from 'react';
import { SVGProps } from 'react';

const SvgBurgerMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className="svg-burger"
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <rect
      className="svg-burger__top svg-burger-line"
      x={3}
      y={12}
      width={32}
      height={2}
      fill="white"
    />
    <rect
      className="svg-burger__middle svg-burger-line"
      x={3}
      y={20}
      width={32}
      height={2}
      fill="white"
    />
    <rect
      className="svg-burger__bottom svg-burger-line"
      x={3}
      y={28}
      width={32}
      height={2}
      fill="white"
    />
  </svg>
);

export default SvgBurgerMenu;
