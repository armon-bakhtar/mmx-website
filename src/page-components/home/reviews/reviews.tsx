import React, { FC } from 'react';
import { CommonTypes } from '@/shared/types/common';
import { useClasses } from './lib/use-classes';
import { Container } from '@/shared/ui/container/container';
import { ReviewsSwiper } from './ui/reviews-swiper';

export type ReviewsProps = CommonTypes;

const Reviews: FC<ReviewsProps> = ({ className }) => {
  const { cnRoot, cnContainer, cnTitle, cnBlur } = useClasses({ className });

  return (
    <section className={cnRoot} id="reviews">
      <Container className={cnContainer}>
        <h2 className={cnTitle}>
          Find out <span>what clients think</span> about our work
        </h2>
        <ReviewsSwiper />
        <div className={cnBlur}></div>
      </Container>
    </section>
  );
};

export default Reviews;
