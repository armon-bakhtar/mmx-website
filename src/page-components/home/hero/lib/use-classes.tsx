import classNames from 'classnames/bind';

import classes from '../hero.module.scss';
import { HeroProps } from '../hero';

const cn = classNames.bind(classes);

type PickedHeroProps = Pick<HeroProps, 'className' | 'itemActive' | 'isSafari'>;

export const useClasses = ({
  className,
  itemActive,
  isSafari,
}: PickedHeroProps) => {
  const cnRoot = cn(`hero`, className);

  const cnContainer = cn('hero__container');

  const cnTitle = cn('hero__title');

  const cnButton = cn('hero__button');

  const cnInfoWrapper = cn('hero__info-wrapper');

  const cnInfoDecor = cn('hero__info-decor', {
    'hero__info-decor--first-active': itemActive === 0,
    'hero__info-decor--second-active': itemActive === 1,
    'hero__info-decor--third-active': itemActive === 2,
  });

  const cnInfoItem = cn('hero__info-item', {
    'hero__info-item--first-active': itemActive === 0,
    'hero__info-item--second-active': itemActive === 1,
    'hero__info-item--third-active': itemActive === 2,
    'hero__info-item-is-safari': isSafari,
  });

  return {
    cnRoot,
    cnContainer,
    cnTitle,
    cnButton,
    cnInfoWrapper,
    cnInfoDecor,
    cnInfoItem,
  };
};
