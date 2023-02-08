import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FiPhoneCall } from 'react-icons/fi';
import { SlSocialVkontakte } from 'react-icons/sl';

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4 text-[#5651e5]">Надежда Кузнецова</h1>
          <h1 className="py-2 text-gray-700">Репетитор по истории и обществознанию</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Какой то длинный текст который что-то рассказывает про тебя и возможно твой
            опыт и еще что-нибудь.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto p-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 hover:shadow-gray-700 ease-in duration-300">
              <SlSocialVkontakte />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 hover:shadow-gray-700 ease-in duration-300">
              <FiPhoneCall />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 hover:shadow-gray-700 ease-in duration-300">
              <AiOutlineMail />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 hover:shadow-gray-700 ease-in duration-300">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
