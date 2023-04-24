import Image, { StaticImageData } from 'next/image';
import React from 'react';

export const ImageModal = ({
  show,
  image,
}: {
  show: boolean;
  image: StaticImageData;
}) => {
  if (!show) {
    return null;
  }
  return (
    <div>
      <div className="fixed top-0 left-0">
        <Image src={image} alt="/" />
      </div>
    </div>
  );
};
