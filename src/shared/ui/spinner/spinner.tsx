// import { SvgLoader } from '@shared/icons';
import { Loader } from '@/shared/icons';
import { CommonTypes, TypeWithoutClassName } from '@/shared/types/common';
import { FC, SVGProps } from 'react';

import { useClasses } from './lib/use-classes';

export interface SpinnerProps
  extends TypeWithoutClassName<SVGProps<SVGSVGElement>>,
    CommonTypes {
  isAbsolute?: boolean;
  circleColor?: string;
  strokeColor?: string;
}

export const Spinner: FC<SpinnerProps> = ({
  className,
  isAbsolute = true,
  circleColor,
  strokeColor,
  ...props
}) => {
  const { cnRoot } = useClasses({ isAbsolute });

  return (
    <Loader
      className={cnRoot}
      circleColor={circleColor}
      strokeColor={strokeColor}
      {...props}
    />
  );
};
