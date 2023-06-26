import classNames from 'classnames/bind';
import { BaseProps } from '../base';

import classes from '../base.module.scss';

type PickedBaseProps = Pick<BaseProps, 'className'>;

const cn = classNames.bind(classes);

export const useClasses = ({ className }: PickedBaseProps) => {
  const cnRoot = cn(`modal`, className);

  const cnOverlay = cn(`overlay`);

  const cnClose = cn(`modal__close`);

  const cnCloseIcon = cn(`modal__close-icon`);

  return {
    cnRoot,
    cnOverlay,
    cnClose,
    cnCloseIcon,
  };
};
