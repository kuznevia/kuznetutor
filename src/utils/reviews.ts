import { IReview } from '@/src/models/Client';

export const getAllReviewsIds = (reviews: IReview[]) =>
  reviews.map((review) => ({
    params: {
      id: review.id,
    },
  }));
