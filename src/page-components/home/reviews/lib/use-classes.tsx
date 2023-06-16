import classNames from 'classnames/bind';
import { ReviewsProps } from '../reviews';

import classes from '../reviews.module.scss';

const cn = classNames.bind(classes);

type PickedReviewsProps = Pick<ReviewsProps, 'className'>;

export const useClasses = ({ className }: PickedReviewsProps) => {
  const cnRoot = cn(`reviews`, className);

  const cnContainer = cn('reviews__container');

  const cnTitle = cn('reviews__title');

  const cnBlur = cn('reviews__blur');

  return {
    cnRoot,
    cnContainer,
    cnTitle,
    cnBlur,
  };
};
