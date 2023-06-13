import classNames from 'classnames/bind';

import classes from '../layout.module.scss';
import { LayoutProps } from '../layout';

const cn = classNames.bind(classes);

type PickedLayoutProps = Pick<LayoutProps, 'className'>;

export const useClasses = ({ className }: PickedLayoutProps) => {
  const cnRoot = cn(`layout`, className);

  return {
    cnRoot,
  };
};
