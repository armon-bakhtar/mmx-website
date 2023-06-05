import { CommonTypes } from '@/shared/types/common';
import { FC, ReactNode } from 'react';

import { useClasses } from './lib/use-classes';

export interface ContainerProps extends CommonTypes {
  children: ReactNode;
}

export const Container: FC<ContainerProps> = ({ className, children }) => {
  const { cnRoot } = useClasses({ className });

  return <div className={cnRoot}>{children}</div>;
};
