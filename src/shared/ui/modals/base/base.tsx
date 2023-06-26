import React, { FC, ReactNode, useRef } from 'react';
import { CommonTypes } from '@/shared/types/common';
import { useClasses } from './lib/use-classes';
import { useOnClickOutside } from '@/shared/hooks/use-onclick-outside';
import { useHandleKeyPress } from '@/shared/hooks/use-handle-key-press';
import { Cross } from '@/shared/icons';

export interface BaseProps extends CommonTypes {
  onClose: () => void;
  children: ReactNode;
}

const Base: FC<BaseProps> = ({ className, children, onClose }) => {
  const { cnRoot, cnOverlay, cnClose, cnCloseIcon } = useClasses({ className });

  const baseRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(baseRef, onClose);
  useHandleKeyPress({ callback: onClose });

  return (
    <div className={cnOverlay}>
      <div className={cnRoot} ref={baseRef}>
        <button className={cnClose} onClick={onClose}>
          <Cross className={cnCloseIcon} />
        </button>

        {children}
      </div>
    </div>
  );
};

export default Base;
