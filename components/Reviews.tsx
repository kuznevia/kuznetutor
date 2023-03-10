import React from 'react';

import { IReview } from '@/models/Client';

import ReviewItem from './ReviewItem';

const Reviews = ({ reviews }: { reviews: IReview[] }) => {
  return (
    <div id="reviews" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">Отзывы</p>
        <h2 className="py-4">Что говорят мои ученики</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review) => (
            <ReviewItem key={review.id} title="Отзыв ученика" review={review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
