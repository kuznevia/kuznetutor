import React from 'react';
import { IconType } from 'react-icons';

export const Icon = ({ Icon, nav, ...rest }: { Icon: IconType; nav?: boolean }) => {
  if (nav) {
    return (
      <div className="bg-[var(--bg-secondary)] text-white rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 hover:shadow-gray-700 ease-in duration-300">
        <Icon />
      </div>
    );
  }
  return (
    <div
      className="bg-[var(--bg-secondary)] text-white rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 hover:shadow-gray-700 ease-in duration-300"
      {...rest}
    >
      <Icon />
    </div>
  );
};
