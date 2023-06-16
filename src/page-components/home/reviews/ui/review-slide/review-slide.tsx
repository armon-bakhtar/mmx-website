import React, { FC } from 'react';
import { CommonTypes } from '@/shared/types/common';
import { useClasses } from './lib/use-classes';
import Image from 'next/image';
import SvgStar from '@/shared/icons/Star';

export interface ReviewSlideProps extends CommonTypes {
  avatar: any;
  name: string;
  position: string;
  review: string;
  stars: number;
}

const ReviewSlide: FC<ReviewSlideProps> = ({
  avatar,
  name,
  position,
  review,
  stars,
  className,
}) => {
  const safeStars = stars > 5 ? 5 : stars;
  const starsArray = Array(safeStars).fill(1);
  const {
    cnRoot,
    cnReviewer,
    cnAvatar,
    cnReviewerInfo,
    cnName,
    cnPosition,
    cnStars,
    cnReview,
  } = useClasses({ className });

  return (
    <div className={cnRoot}>
      <div className={cnReviewer}>
        <Image className={cnAvatar} src={avatar} alt="review-avatar" />
        <div className={cnReviewerInfo}>
          <h3 className={cnName}>{name}</h3>
          <p className={cnPosition}>{position}</p>
          <div className={cnStars}>
            {starsArray.map((index) => (
              <SvgStar key={index} />
            ))}
          </div>
        </div>
      </div>
      <p className={cnReview}>{review}</p>
    </div>
  );
};

export default ReviewSlide;
