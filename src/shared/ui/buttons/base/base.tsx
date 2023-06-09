import React, { ButtonHTMLAttributes, FC } from 'react';
import { CommonTypes, TypeWithoutClassName } from '@/shared/types/common';
import { useClasses } from './lib/use-classes';
import { Spinner } from '@/shared/ui/spinner';

export type SizeButton = 'large' | 'small';

export interface BaseProps
  extends TypeWithoutClassName<ButtonHTMLAttributes<HTMLButtonElement>>,
    CommonTypes {
  className?: string;
  contentCSS?: string;
  isLoading?: boolean;
  loaderColor?: string;
}

const Base: FC<BaseProps> = ({
  className,
  contentCSS,
  isLoading,
  disabled,
  children,
  loaderColor,
  ...props
}) => {
  const { cnRoot, cnContent } = useClasses({
    className,
    contentCSS,
    isLoading,
  });

  return (
    <button className={cnRoot} disabled={disabled} {...props}>
      <span className={cnContent}>{children}</span>
      {isLoading && <Spinner />}
    </button>
  );
};

export default Base;
