export const reviews = [
  { id: 1, name: 'Вася', surname: 'Пупкин', text: 'Отличный репетитор. Вася' },
  { id: 2, name: 'Лена', surname: 'Пупкина', text: 'Отличный репетитор. Лена' },
  { id: 3, name: 'Антон', surname: 'Полкин', text: 'Отличный репетитор. Антон' },
  { id: 4, name: 'Ирина', surname: 'Толкина', text: 'Отличный репетитор. Ирина' },
];

export const getAllReviewsIds = () =>
  reviews.map((review) => ({
    params: {
      id: String(review.id),
    },
  }));

export const getReviewData = (id: string) =>
  reviews.find((review) => String(review.id) === id);
