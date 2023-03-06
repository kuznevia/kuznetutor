import { IReview } from 'models/Client';
import { getAllReviewsIds, getReviewData } from 'utils/reviews';

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
  const paths = getAllReviewsIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const reviewData = getReviewData(params.id);
  return {
    props: {
      reviewData,
    },
  };
}
