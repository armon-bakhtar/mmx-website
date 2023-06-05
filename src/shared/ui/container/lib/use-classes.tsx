import classNames from 'classnames/bind';

import { ContainerProps } from '../container';
import classes from '../container.module.scss';

const cn = classNames.bind(classes);

type PickedContainerProps = Pick<ContainerProps, 'className'>;

export const useClasses = ({ className }: PickedContainerProps) => {
  const cnRoot = cn(`container`, className);

  return {
    cnRoot,
  };
};
