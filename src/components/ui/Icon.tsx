import Link from 'next/link';
import React from 'react';
import { IconType } from 'react-icons';

export const Icon = ({
  Icon,
  link,
  nav,
  onClick,
  ...rest
}: {
  Icon: IconType;
  link: string;
  nav?: boolean;
  onClick?: () => void;
}) => {
  if (nav) {
    return (
      <Link href={link} onClick={onClick}>
        <div className="bg-[var(--bg-secondary)] text-white rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 hover:shadow-gray-700 ease-in duration-300">
          <Icon />
        </div>
      </Link>
    );
  }
  return (
    <Link href={link} onClick={onClick}>
      <div
        className="bg-[var(--bg-secondary)] text-white rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 hover:shadow-gray-700 ease-in duration-300"
        {...rest}
      >
        <Icon />
      </div>
    </Link>
  );
};
