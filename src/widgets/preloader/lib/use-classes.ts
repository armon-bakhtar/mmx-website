import classNames from 'classnames/bind';
import { PreloaderProps } from '../preloader';

import classes from '../preloader.module.scss';

const cn = classNames.bind(classes);

type PickedPreloaderProps = Pick<PreloaderProps, 'className'>;

export const useClasses = ({ className }: PickedPreloaderProps) => {
  const cnRoot = cn('preloader', className);

  const cnContent = cn('preloader__content');

  const cnAnimation = cn('preloader__animation');

  const cnLoading = cn('preloader__loading');

  const cnProgressbar = cn('preloader__progressbar');

  return {
    cnRoot,
    cnContent,
    cnAnimation,
    cnLoading,
    cnProgressbar,
  };
};
