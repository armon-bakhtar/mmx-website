import { CommonTypes } from '@shared/types/common';
import classNames from 'classnames/bind';

import classes from '../option.module.scss';

const cn = classNames.bind(classes);

export const useClasses = ({ className }: CommonTypes) => {
  const cnRoot = cn('option', className);

  const cnFlag = cn('option__flag');

  return {
    cnRoot,
    cnFlag,
  };
};
