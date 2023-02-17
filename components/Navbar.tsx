import Image from 'next/image';
import Link from 'next/link';
import LogoPic from 'public/assets/logo.png';
import React, { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FiPhoneCall } from 'react-icons/fi';
import { SlSocialVkontakte } from 'react-icons/sl';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = (state: boolean) => () => {
    setNav(state);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      className={
        shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20  z-[100]'
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image src={LogoPic} alt="логотип" width="125" height="50" />
        </Link>
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-small uppercase hover:border-b">Главная</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-small uppercase hover:border-b">Обо мне</li>
            </Link>
            <Link href="/#reviews">
              <li className="ml-10 text-small uppercase hover:border-b">Отзывы</li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-small uppercase hover:border-b">Контакты</li>
            </Link>
          </ul>
          <div onClick={handleNav(true)} role="button" tabIndex={0} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}
      >
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] p-10 ease-in duration-500'
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image src={LogoPic} alt="логотип" width="87" height="35" />
              <div
                onClick={handleNav(false)}
                role="button"
                tabIndex={0}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:shadow-gray-700 hover:scale-105 ease-in duration-300"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div>
              <p className="w-[85%] md:w-[90%] py-4">Пример текста для сайта</p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li className="py-4 text-sm">Главная</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Обо мне</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Отзывы</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Контакты</li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">Социальные сети</p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 hover:shadow-gray-700 ease-in duration-300">
                  <SlSocialVkontakte />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 hover:shadow-gray-700 ease-in duration-300">
                  <FiPhoneCall />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 hover:shadow-gray-700 ease-in duration-300">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 hover:shadow-gray-700 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
