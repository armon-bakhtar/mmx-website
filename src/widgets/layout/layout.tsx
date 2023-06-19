import React, { FC, ReactNode } from 'react';
import { CommonTypes } from '@/shared/types/common';
import { useClasses } from './lib/use-classes';
import { Header } from '../header';
import { Footer } from '../footer';

export interface LayoutProps extends CommonTypes {
  children?: ReactNode;
}

const Layout: FC<LayoutProps> = ({ className, children }) => {
  const { cnRoot } = useClasses({ className });

  return (
    <main className={cnRoot}>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
