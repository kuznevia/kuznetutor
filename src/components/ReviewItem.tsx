import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { IReview } from 'src/models/Client';
import { reviewImages } from 'src/utils/static';

const ReviewItem = ({
  review,
  title,
  setShowModal,
  setReviewImage,
}: {
  review: IReview;
  title: string;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setReviewImage: React.Dispatch<React.SetStateAction<StaticImageData>>;
}) => {
  return (
    <div
      key={review.id}
      className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounde-xl p-4 group hover:bg-gradient-to-r from-[var(--bg-primary)] to-[var(--bg-secondary)]"
    >
      <Image
        src={reviewImages.background}
        className="rounded-xl group-hover:opacity-10"
        height={500}
        alt="/"
      />
      <div className="hidden  group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-[var(--color-secondary)] tracking-wider text-center text-white">
          {title}
        </h3>
        <button
          className="w-full p-4 mt-4"
          onClick={() => {
            if (review.imageLink === 'first' || review.imageLink === 'second') {
              setReviewImage(reviewImages[review.imageLink]);
              setShowModal(true);
            } else {
              // eslint-disable-next-line no-console
              console.log('Неправильный путь до изображения');
            }
          }}
        >
          Читать полностью
        </button>
      </div>
    </div>
  );
};

export default ReviewItem;
