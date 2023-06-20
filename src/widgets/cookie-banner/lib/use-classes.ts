import classNames from 'classnames/bind';
import { CookieBannerProps } from '../cookie-banner';

import classes from '../cookie-banner.module.scss';

const cn = classNames.bind(classes);

type PickedCookieBannerProps = Pick<CookieBannerProps, 'className'>;

export const useClasses = ({ className }: PickedCookieBannerProps) => {
  const cnRoot = cn('cookie-banner', className);

  const cnContainer = cn('cookie-banner__container');

  const cnContent = cn('cookie-banner__content');

  const cnText = cn('cookie-banner__text');

  const cnButtonWrapper = cn('cookie-banner__button-wrapper');

  return {
    cnRoot,
    cnContainer,
    cnContent,
    cnText,
    cnButtonWrapper,
  };
};
