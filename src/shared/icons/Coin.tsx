import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCoin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={184}
    height={193}
    fill="none"
    viewBox="0 0 184 193"
    {...props}
  >
    <path
      fill="url(#coin_svg__a)"
      stroke="#000"
      strokeWidth={0.5}
      d="m157.805 31.19-.008-.006c-5.451-4.495-12.362-10.042-19.311-14.764-6.951-4.723-13.912-8.6-19.475-9.793-13.98-1.376-26.69 5.088-38.663 15.659-11.979 10.575-23.187 25.231-34.156 40.17-11.42 15.55-21.042 32.3-26.25 48.512-5.206 16.206-5.992 31.848.212 45.226 2.645 3.817 7.77 8.316 13.226 12.606 3.467 2.726 7.048 5.354 10.194 7.662a419.195 419.195 0 0 1 4.893 3.626c31.405 23.816 81.382 9.903 111.613-31.265 30.23-41.168 29.13-93.816-2.275-117.633Z"
    />
    <path
      fill="url(#coin_svg__b)"
      stroke="#000"
      strokeWidth={0.5}
      d="M24.313 45.851C-5.97 87.088-4.374 140.211 27.705 164.54c32.08 24.328 82.645 10.762 112.926-30.476 30.282-41.237 28.687-94.36-3.392-118.688C105.16-8.952 54.594 4.614 24.313 45.851Z"
    />
    <path
      stroke="#000"
      strokeWidth={0.5}
      d="M33.686 52.96c-25.41 34.603-24.063 79.166 2.84 99.568 26.902 20.402 69.322 9.031 94.732-25.573 25.411-34.603 24.063-79.166-2.839-99.568-26.903-20.402-69.323-9.031-94.733 25.573Z"
    />
    <path
      fill="#000"
      d="M62.419 118.605c-5.832-1.157-9.716-3.258-11.651-6.301-1.88-3.038-2.035-6.693-.465-10.965l12.46 1.111c-.21 1.044-.256 1.97-.137 2.778.12.808.514 1.508 1.184 2.099.67.592 1.605 1.1 2.805 1.526 1.22.375 2.8.648 4.738.821 3.987.356 7.044.123 9.171-.697 2.204-.867 3.695-2.223 4.472-4.067.95-2.254.5-4.049-1.352-5.383-1.773-1.38-4.986-2.757-9.636-4.128-2.775-.779-5.152-1.682-7.132-2.709-1.96-1.078-3.472-2.33-4.538-3.753-1.044-1.475-1.593-3.172-1.647-5.09-.053-1.92.46-4.16 1.54-6.72 1.705-4.048 4.603-7.245 8.694-9.591 4.169-2.393 9.062-3.71 14.68-3.954l2.98-7.07 9.967.888-2.98 7.07c5.279 1.109 8.714 3.116 10.305 6.022 1.612 2.855 1.77 6.297.474 10.328l-12.46-1.11c.39-1.88.076-3.316-.941-4.31-.996-1.046-3.1-1.712-6.312-1.998-3.267-.292-5.88-.02-7.842.816-1.96.835-3.286 2.072-3.977 3.712-.82 1.946-.427 3.603 1.181 4.969 1.685 1.32 4.653 2.594 8.903 3.823 2.92.845 5.424 1.786 7.515 2.823 2.147 1.042 3.781 2.277 4.902 3.706 1.178 1.434 1.81 3.138 1.897 5.113.164 1.928-.305 4.198-1.406 6.811-1.856 4.406-5.012 7.873-9.466 10.399-4.4 2.532-9.719 3.838-15.959 3.92l-3.626 8.607-9.968-.889 3.627-8.607Z"
    />
    <defs>
      <linearGradient
        id="coin_svg__a"
        x1={197.204}
        x2={110.842}
        y1={39.021}
        y2={205.156}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#30341A" />
        <stop offset={0.33} stopColor="#B6C458" />
        <stop offset={1} stopColor="#131604" />
      </linearGradient>
      <linearGradient
        id="coin_svg__b"
        x1={29.614}
        x2={168.53}
        y1={161.228}
        y2={45.201}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F4FFAE" />
        <stop offset={0.542} stopColor="#DDF253" />
        <stop offset={1} stopColor="#F5FFB1" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgCoin;
