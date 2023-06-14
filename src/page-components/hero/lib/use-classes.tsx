import classNames from 'classnames/bind';

import classes from '../hero.module.scss';
import { HeroProps } from '../hero';

const cn = classNames.bind(classes);

type PickedHeroProps = Pick<HeroProps, 'className'>;

export const useClasses = ({ className }: PickedHeroProps) => {
  const cnRoot = cn(`hero`, className);

  const cnContainer = cn('hero__container');

  const cnTitle = cn('hero__title');

  const cnButton = cn('hero__button');

  const cnInfoWrapper = cn('hero__info-wrapper');

  const cnInfoDecor = cn('hero__info-decor');

  const cnInfoItem = cn('hero__info-item');

  const cnCanvas = cn('hero__canvas');

  return {
    cnRoot,
    cnContainer,
    cnTitle,
    cnButton,
    cnInfoWrapper,
    cnInfoDecor,
    cnInfoItem,
    cnCanvas,
  };
};
