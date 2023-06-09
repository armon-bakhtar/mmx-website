import classNames from 'classnames/bind';

import { InputPhoneProps } from '../input-phone';
import classes from '../input-phone.module.scss';

type PickedInputPhoneProps = Pick<InputPhoneProps, 'className'>;

const cn = classNames.bind(classes);

export const useClasses = ({ className }: PickedInputPhoneProps) => {
  const cnRoot = cn('input-phone', className);

  const cnField = cn('input-phone__field');

  return {
    cnRoot,
    cnField,
  };
};
