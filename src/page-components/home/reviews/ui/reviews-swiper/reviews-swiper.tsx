import React, { FC } from 'react';
import { CommonTypes } from '@/shared/types/common';
import { useClasses } from './lib/use-classes';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ReviewSlide } from '../review-slide';
import { reviewers } from './lib/mock-reviews';
import 'swiper/css';

export type ReviewsSwiperProps = CommonTypes;

const ReviewsSwiper: FC<ReviewsSwiperProps> = ({ className }) => {
  const { cnRoot, cnSlide } = useClasses({ className });

  return (
    <Swiper
      className={cnRoot}
      direction="horizontal"
      spaceBetween={20}
      slidesPerView={'auto'}
    >
      {reviewers.map((reviewer, index) => (
        <SwiperSlide className={cnSlide} key={index}>
          <ReviewSlide
            avatar={reviewer.avatar}
            name={reviewer.name}
            position={reviewer.position}
            stars={reviewer.stars}
            review={reviewer.review}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReviewsSwiper;
