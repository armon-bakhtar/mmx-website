import classNames from 'classnames/bind';
import { ReviewSlideProps } from '../review-slide';

import classes from '../review-slide.module.scss';

const cn = classNames.bind(classes);

type PickedReviewSlideProps = Pick<ReviewSlideProps, 'className'>;

export const useClasses = ({ className }: PickedReviewSlideProps) => {
  const cnRoot = cn(`review-slide`, className);

  const cnReviewer = cn('review-slide__reviewer');

  const cnAvatar = cn('review-slide__avatar');

  const cnReviewerInfo = cn('review-slide__reviewer-info');

  const cnName = cn('review-slide__name');

  const cnPosition = cn('review-slide__position');

  const cnStars = cn('review-slide__stars');

  const cnReview = cn('review-slide__review');

  return {
    cnRoot,
    cnReviewer,
    cnAvatar,
    cnReviewerInfo,
    cnName,
    cnPosition,
    cnStars,
    cnReview,
  };
};
