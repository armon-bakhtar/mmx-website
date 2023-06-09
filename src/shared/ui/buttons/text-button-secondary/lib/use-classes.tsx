import classNames from 'classnames/bind';
import { TextBaseProps } from '../../text-base/text-base';

import classes from '../text-button-secondary.module.scss';

const cn = classNames.bind(classes);

type PickedTextBaseProps = Pick<TextBaseProps, 'className'>;
export const useClasses = ({ className }: PickedTextBaseProps) => {
  const cnRoot = cn(`text-button-secondary`, className);

  return {
    cnRoot,
  };
};
