import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCroatia = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#croatia_svg__a)">
      <g clipPath="url(#croatia_svg__b)">
        <rect width={22} height={16} fill="#fff" rx={2} />
        <path
          fill="#1A47B8"
          fillRule="evenodd"
          d="M0 11h22v5H0v-5Z"
          clipRule="evenodd"
        />
        <path
          fill="#F93939"
          fillRule="evenodd"
          d="M0 0h22v5H0V0Z"
          clipRule="evenodd"
        />
        <path
          fill="#3A99FF"
          fillRule="evenodd"
          d="M8.38 4.267h1.048v1.066H8.381V4.267ZM10.477 3.2h1.048v2.133h-1.048V3.2Zm2.095 1.067h1.048v1.066h-1.048V4.267Z"
          clipRule="evenodd"
        />
        <path
          fill="#1A47B8"
          fillRule="evenodd"
          d="M11.524 3.2h1.048v2.133h-1.048V3.2Zm-2.095 0h1.047v2.133H9.43V3.2Z"
          clipRule="evenodd"
        />
        <mask
          id="croatia_svg__c"
          width={6}
          height={7}
          x={8}
          y={5}
          maskUnits="userSpaceOnUse"
          style={{
            maskType: 'alpha',
          }}
        >
          <path
            fill="#fff"
            d="M13.619 9.067c0 1.472-1.173 2.666-2.62 2.666-1.445 0-2.618-1.194-2.618-2.666V5.333h5.238v3.734Z"
          />
        </mask>
        <g mask="url(#croatia_svg__c)">
          <path
            fill="#F93939"
            d="M13.619 9.067c0 1.472-1.173 2.666-2.62 2.666-1.445 0-2.618-1.194-2.618-2.666V5.333h5.238v3.734Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M9.428 10.667h1.048v1.066H9.428v-1.066Zm2.096 0h1.047v1.066h-1.047v-1.066ZM10.476 9.6h1.048v1.067h-1.048V9.6ZM9.428 8.533h1.048V9.6H9.428V8.533Zm2.096 0h1.047V9.6h-1.047V8.533Zm-1.048-1.066h1.048v1.066h-1.048V7.467ZM9.428 6.4h1.048v1.067H9.428V6.4Zm2.096 0h1.047v1.067h-1.047V6.4Zm-1.048-1.067h1.048V6.4h-1.048V5.333Zm2.095 0h1.048V6.4h-1.048V5.333Zm0 2.134h1.048v1.066h-1.048V7.467Zm0 2.133h1.048v1.067h-1.048V9.6Zm-4.19 0h1.047v1.067H8.381V9.6Zm0-2.133h1.047v1.066H8.381V7.467Zm0-2.134h1.047V6.4H8.381V5.333Z"
            clipRule="evenodd"
          />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="croatia_svg__a">
        <path fill="#fff" d="M0 0h22v16H0z" />
      </clipPath>
      <clipPath id="croatia_svg__b">
        <rect width={22} height={16} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCroatia;
