import classNames from 'classnames/bind';

import { BaseProps } from '../base';
import classes from '../base.module.scss';

const cn = classNames.bind(classes);

type PickedBaseProps = Pick<
  BaseProps,
  'className' | 'contentCSS' | 'isLoading'
>;
export const useClasses = ({
  className,
  contentCSS,
  isLoading,
}: PickedBaseProps) => {
  const cnRoot = cn(`button`, { loading: isLoading }, className);

  const cnContent = cn(`button__content`, { loading: isLoading }, contentCSS);

  return {
    cnRoot,
    cnContent,
  };
};
