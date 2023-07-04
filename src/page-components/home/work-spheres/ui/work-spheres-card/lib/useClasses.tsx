import classNames from 'classnames/bind';

import { WorkSpheresCardProps } from '../work-spheres-card';
import classes from '../work-spheres-card.module.scss';

const cn = classNames.bind(classes);

type PickedWorkSpheresCardProps = Pick<WorkSpheresCardProps, 'className'>;

export const useClasses = ({ className }: PickedWorkSpheresCardProps) => {
  const cnRoot = cn(`work-spheres-card`, className);

  const cnName = cn('work-spheres-card__name');

  const cnText = cn('work-spheres-card__text');

  const cnIconWrapper = cn('work-spheres-card__icon-wrapper');

  const cnAnimationWrapper = cn('work-spheres-card__animation-wrapper');

  const cnIcon = cn('work-spheres-card__icon');

  const cnIconBlur = cn('work-spheres-card__icon-blur');

  return {
    cnRoot,
    cnName,
    cnText,
    cnIconWrapper,
    cnAnimationWrapper,
    cnIcon,
    cnIconBlur,
  };
};
