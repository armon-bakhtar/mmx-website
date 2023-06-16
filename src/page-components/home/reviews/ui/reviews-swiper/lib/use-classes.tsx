import classNames from 'classnames/bind';
import { ReviewsSwiperProps } from '../reviews-swiper';

import classes from '../reviews-swiper.module.scss';

const cn = classNames.bind(classes);

type PickedReviewsSwiperProps = Pick<ReviewsSwiperProps, 'className'>;

export const useClasses = ({ className }: PickedReviewsSwiperProps) => {
  const cnRoot = cn(`reviews-swiper`, className);

  const cnSlide = cn(`reviews-swiper__slide`);

  return {
    cnRoot,
    cnSlide,
  };
};
