import classNames from 'classnames/bind';
import { BaseProps } from '../../base/base';

import classes from '../button-primary.module.scss';

const cn = classNames.bind(classes);

type PickedBaseProps = Pick<BaseProps, 'className'>;
export const useClasses = ({ className }: PickedBaseProps) => {
  const cnRoot = cn(`button-primary`, className);

  return {
    cnRoot,
  };
};
