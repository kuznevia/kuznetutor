import Link from 'next/link';
import React from 'react';
import { IconType } from 'react-icons';

export const Icon = ({
  Icon,
  nav,
  link,
  ...rest
}: {
  Icon: IconType;
  link: string;
  nav?: boolean;
}) => {
  if (nav) {
    return (
      <Link href={link}>
        <div className="bg-[var(--bg-secondary)] text-white rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 hover:shadow-gray-700 ease-in duration-300">
          <Icon />
        </div>
      </Link>
    );
  }
  return (
    <Link href={link}>
      <div
        className="bg-[var(--bg-secondary)] text-white rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 hover:shadow-gray-700 ease-in duration-300"
        {...rest}
      >
        <Icon />
      </div>
    </Link>
  );
};
