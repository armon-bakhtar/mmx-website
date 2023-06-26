import React, { FC, HTMLAttributes, ReactNode } from 'react';
import { CommonTypes, TypeWithoutClassName } from '@/shared/types/common';
import { useClasses } from './lib/use-classes';
import { Base } from '../base';

export interface ModalDefaultProps
  extends TypeWithoutClassName<HTMLAttributes<HTMLDivElement>>,
    CommonTypes {
  children: ReactNode;
  onClose: () => void;
}

const ModalDefault: FC<ModalDefaultProps> = ({
  children,
  onClose,
  className,
}) => {
  const { cnRoot } = useClasses({
    className,
  });
  return (
    <Base className={cnRoot} onClose={onClose}>
      {children}
    </Base>
  );
};

export default ModalDefault;
