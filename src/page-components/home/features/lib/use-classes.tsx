import classNames from 'classnames/bind';

import classes from '../features.module.scss';
import { FeaturesProps } from '../features';

const cn = classNames.bind(classes);

type PickedFeaturesProps = Pick<FeaturesProps, 'className'>;

export const useClasses = ({ className }: PickedFeaturesProps) => {
  const cnRoot = cn(`features`, className);

  const cnContainer = cn('features__container');

  const cnTextWrapper = cn('features__text-wrapper');

  const cnTitle = cn('features__title');

  const cnText = cn('features__text');

  const cnCardWrapper = cn('features__card-wrapper');

  const cnCard = cn('features__card');

  const cnIcon = cn('features__icon');

  const cnName = cn('features__name');

  const cnDescription = cn('features__description');

  return {
    cnRoot,
    cnContainer,
    cnTextWrapper,
    cnTitle,
    cnText,
    cnCardWrapper,
    cnCard,
    cnIcon,
    cnName,
    cnDescription,
  };
};
