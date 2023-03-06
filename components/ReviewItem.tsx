import { IReview } from 'models/Client';
import Image from 'next/image';
import Link from 'next/link';
import ReviewImg from 'public/assets/review.jpg';
import React from 'react';

const ReviewItem = ({ review, title }: { review: IReview; title: string }) => {
  return (
    <div
      key={review.id}
      className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounde-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]"
    >
      <Image src={ReviewImg} className="rounded-xl group-hover:opacity-10" alt="/" />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">{title}</h3>
        <p className="pb-4 pt-2 text-white text-center">
          {review.name} {review.surname}
        </p>
        <Link href={`reviews/${review.id}`}>
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 fond-bold text-lg cursor-pointer">
            Читать полностью
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ReviewItem;
