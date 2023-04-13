import Image from 'next/image';
import Nadya from 'public/assets/nadya.jpeg';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FiPhoneCall } from 'react-icons/fi';
import { SlSocialVkontakte } from 'react-icons/sl';

import { Icon } from '@/src/components/ui/Icon';

const Main = () => {
  return (
    <div id="home" className="w-full md:h-screen p-2 text-center flex items-center pt-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="flex gap-4 justify-center items-center">
          <div className="w-full bg-[var(--bg-secondary)] h-auto mt-6 md:m-auto shadow-xl shadow-gray-400 rounded-xl p-2 md:p-4 hover:scale-105 ease-in duration-300">
            <Image src={Nadya} className="rounded-xl" alt="/" />
          </div>
          <div className="md:hidden">
            <h2 className="py-4 text-[var(--color-secondary)]">Надежда Кузнецова</h2>
            <h3 className="py-2">Репетитор по истории и обществознанию</h3>
          </div>
        </div>
        <div className="md:hidden flex items-center justify-between max-w-[330px] m-auto mt-6 p-4">
          <Icon Icon={SlSocialVkontakte} />
          <Icon Icon={FiPhoneCall} />
          <Icon Icon={AiOutlineMail} />
          <Icon Icon={BsFillPersonLinesFill} />
        </div>
        <div className="hidden md:flex col-start-2 col-end-4 max-w-[1240px] p-2 justify-center items-center">
          <div>
            <h1 className="py-4 text-[var(--color-secondary)]">Надежда Кузнецова</h1>
            <h1 className="py-2">Репетитор по истории и обществознанию</h1>
            <p className="py-4 max-w-[70%] m-auto">
              Какой то длинный текст который что-то рассказывает про тебя и возможно твой
              опыт и еще что-нибудь еще.
            </p>
            <div className="flex items-center justify-between max-w-[330px] m-auto p-4">
              <Icon Icon={SlSocialVkontakte} />
              <Icon Icon={FiPhoneCall} />
              <Icon Icon={AiOutlineMail} />
              <Icon Icon={BsFillPersonLinesFill} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
