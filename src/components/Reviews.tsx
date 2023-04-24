import React, { useState } from 'react';
import { ImageModal } from 'src/components/Modals/ImageModal';
import { IReview } from 'src/models/Client';
import { reviewImages } from 'src/utils/static';

import ReviewItem from './ReviewItem';

const Reviews = ({ reviews }: { reviews: IReview[] }) => {
  const [showModal, setShowModal] = useState(false);
  const [reviewImage, setReviewImage] = useState(reviewImages.first);

  return (
    <>
      <div id="reviews" className="w-full px-2 py-8">
        <div className="max-w-[1240px] mx-auto px-2 py-8">
          <h2 className="py-4 text-[var(--color-secondary)]">Отзывы</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {reviews.map((review) => (
              <ReviewItem
                key={review.id}
                title="Отзыв ученика"
                review={review}
                setShowModal={setShowModal}
                setReviewImage={setReviewImage}
              />
            ))}
          </div>
        </div>
      </div>
      <ImageModal show={showModal} image={reviewImage} />
    </>
  );
};

export default Reviews;
