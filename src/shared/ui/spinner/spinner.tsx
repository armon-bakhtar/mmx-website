// import { SvgLoader } from '@shared/icons';
import { Loader } from '@/shared/icons';
import { CommonTypes, TypeWithoutClassName } from '@/shared/types/common';
import { FC, SVGProps } from 'react';

import { useClasses } from './lib/use-classes';

export interface SpinnerProps
  extends TypeWithoutClassName<SVGProps<SVGSVGElement>>,
    CommonTypes {
  isAbsolute?: boolean;
  svgColor?: string;
}

export const Spinner: FC<SpinnerProps> = ({
  className,
  isAbsolute = true,
  svgColor,
  ...props
}) => {
  const { cnRoot } = useClasses({ isAbsolute });

  return <Loader className={cnRoot} color={svgColor} {...props} />;
};
