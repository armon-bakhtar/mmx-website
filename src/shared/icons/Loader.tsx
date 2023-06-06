import * as React from 'react';
import type { SVGProps } from 'react';
interface LoaderProps {
  circleColor?: string;
  strokeColor?: string;
}
const SvgLoader = ({
  circleColor,
  strokeColor,
  ...props
}: SVGProps<SVGSVGElement> & LoaderProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <circle
      cx={12}
      cy={12}
      r={9}
      stroke={circleColor ? circleColor : '#898989'}
      strokeWidth={2}
      opacity={0.5}
      transform="rotate(-90 12 12)"
    />
    <path
      stroke={strokeColor ? strokeColor : '#04000D'}
      strokeWidth={2}
      d="M21 12a9 9 0 0 1-9 9"
    />
  </svg>
);
export default SvgLoader;
