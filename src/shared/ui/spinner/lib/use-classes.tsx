import classNames from 'classnames/bind';

import classes from '../spinner.module.scss';
import { SpinnerProps } from '../spinner';

type PickedSpinnerProps = Pick<SpinnerProps, 'isAbsolute'>;

const cn = classNames.bind(classes);

export const useClasses = ({ isAbsolute }: PickedSpinnerProps) => {
  const cnRoot = cn(`spinner`, { 'spinner--absolute': isAbsolute });

  return {
    cnRoot,
  };
};
