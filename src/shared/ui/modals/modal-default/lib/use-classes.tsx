import classNames from 'classnames/bind';

import { ModalDefaultProps } from '../modal-default';
import classes from '../modal-default.module.scss';

const cn = classNames.bind(classes);

type PickedModalDefaultProps = Pick<ModalDefaultProps, 'className'>;

export const useClasses = ({ className }: PickedModalDefaultProps) => {
  const cnRoot = cn(`modal-default`, className);

  return {
    cnRoot,
  };
};
