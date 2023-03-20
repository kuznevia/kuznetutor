import { IReview } from 'models/Client';
import Image from 'next/image';
import Link from 'next/link';
import ReviewImg from 'public/assets/reviews.jpg';
import React from 'react';

const ReviewItem = ({ review, title }: { review: IReview; title: string }) => {
  return (
    <div
      key={review.id}
      className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounde-xl p-4 group hover:bg-gradient-to-r from-[var(--bg-primary)] to-[var(--bg-secondary)]"
    >
      <Image
        src={ReviewImg}
        className="rounded-xl group-hover:opacity-10"
        height={500}
        alt="/"
      />
      <div className="hidden  group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-[var(--color-secondary)] tracking-wider text-center text-white">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-center text-white">
          {review.name} {review.surname}
        </p>
        <Link href={`reviews/${review.id}`}>
          <p className="text-center py-3 rounded-lg text-white bg-[var(--bg-secondary)] fond-bold text-lg cursor-pointer">
            Читать полностью
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ReviewItem;
