import React from 'react';

import ReviewItem from './ReviewItem';

const students = [
  { id: 1, name: 'Вася', surname: 'Пупкин' },
  { id: 2, name: 'Лена', surname: 'Пупкина' },
  { id: 3, name: 'Антон', surname: 'Полкин' },
  { id: 4, name: 'Ирина', surname: 'Толкина' },
];

const Reviews = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">Отзывы</p>
        <h2 className="py-4">Что говорят мои ученики</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {students.map((student) => (
            <ReviewItem key={student.id} title="Отзыв ученика" student={student} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
