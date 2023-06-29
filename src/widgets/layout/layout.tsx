import React, { FC, ReactNode } from 'react';
import { CommonTypes } from '@/shared/types/common';
import { useClasses } from './lib/use-classes';

export interface LayoutProps extends CommonTypes {
  children?: ReactNode;
}

const Layout: FC<LayoutProps> = ({ className, children }) => {
  const { cnRoot } = useClasses({ className });

  return <main className={cnRoot}>{children}</main>;
};

export default Layout;
