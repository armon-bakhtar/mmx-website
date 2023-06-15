import classNames from 'classnames/bind';

import classes from '../work-spheres.module.scss';
import { WorkSpheresProps } from '../work-spheres';

const cn = classNames.bind(classes);

type PickedWorkSpheresProps = Pick<WorkSpheresProps, 'className'>;

export const useClasses = ({ className }: PickedWorkSpheresProps) => {
  const cnRoot = cn(`work-spheres`, className);

  const cnContainer = cn('work-spheres__container');

  const cnTitle = cn('work-spheres__title');

  const cnCardWrapper = cn('work-spheres__card-wrapper');

  const cnCard = cn('work-spheres__card');

  const cnName = cn('work-spheres__name');

  const cnText = cn('work-spheres__text');

  const cnIconWrapper = cn('work-spheres__icon-wrapper');

  const cnIcon = cn('work-spheres__icon');

  const cnBlur = cn('work-spheres__blur');

  return {
    cnRoot,
    cnContainer,
    cnTitle,
    cnCardWrapper,
    cnCard,
    cnName,
    cnText,
    cnIconWrapper,
    cnIcon,
    cnBlur,
  };
};
