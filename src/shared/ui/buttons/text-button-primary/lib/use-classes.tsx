import classNames from 'classnames/bind';
import { TextBaseProps } from '../../text-base/text-base';

import classes from '../text-button-primary.module.scss';

const cn = classNames.bind(classes);

type PickedTextBaseProps = Pick<TextBaseProps, 'className'>;
export const useClasses = ({ className }: PickedTextBaseProps) => {
  const cnRoot = cn(`text-button-primary`, className);

  return {
    cnRoot,
  };
};
