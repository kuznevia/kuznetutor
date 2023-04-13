import { PrismaClient } from '@prisma/client';

import { IReview } from '@/src/models/Client';
import { getAllReviewsIds } from '@/src/utils/reviews';

const prisma = new PrismaClient();

export default function Review({ reviewData }: { reviewData?: IReview }) {
  if (!reviewData) {
    return 'Отзыв не найден';
  }

  return (
    <div>
      <h1>{`${reviewData.name} ${reviewData.surname}`}</h1>
      <p>{reviewData.text}</p>
    </div>
  );
}

export async function getStaticPaths() {
  const reviews: IReview[] = await prisma.review.findMany();
  const paths = getAllReviewsIds(reviews);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const reviewData = await prisma.review.findFirst({
    where: {
      id: {
        equals: params.id,
      },
    },
  });
  return {
    props: {
      reviewData,
    },
  };
}
