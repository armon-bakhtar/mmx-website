import classNames from 'classnames/bind';
import { BaseProps } from '../../base/base';

import classes from '../button-secondary.module.scss';

const cn = classNames.bind(classes);

type PickedBaseProps = Pick<BaseProps, 'className'>;
export const useClasses = ({ className }: PickedBaseProps) => {
  const cnRoot = cn(`button-secondary`, className);

  return {
    cnRoot,
  };
};
