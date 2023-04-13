import { Icon } from '@/src/components/ui/Icon';
import Image from 'next/image';
import Link from 'next/link';
import LogoPic from 'public/assets/books.png';
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
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100] bg-[var(--bg-primary)]'
          : 'fixed w-full h-20  z-[100]'
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image src={LogoPic} alt="логотип" width="70" height="25" />
        </Link>
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-small uppercase hover:text-[var(--color-secondary)] hover:scale-110 ease-in duration-300">
                Главная
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-small uppercase hover:text-[var(--color-secondary)] hover:scale-110 ease-in duration-300">
                Обо мне
              </li>
            </Link>
            <Link href="/#reviews">
              <li className="ml-10 text-small uppercase hover:text-[var(--color-secondary)] hover:scale-110 ease-in duration-300">
                Отзывы
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-small uppercase hover:text-[var(--color-secondary)] hover:scale-110 ease-in duration-300">
                Контакты
              </li>
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
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[var(--bg-primary)] p-10 ease-in duration-500'
              : 'fixed left-[-100%] p-10 ease-in duration-500'
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <div onClick={() => setNav(false)} role="button" tabIndex={0}>
                  <Image src={LogoPic} alt="логотип" width="87" height="35" />
                </div>
              </Link>
              <div
                onClick={handleNav(false)}
                role="button"
                tabIndex={0}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:shadow-gray-700 hover:scale-105 ease-in duration-300"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-[var(--color-secondary)] my-4">
              <p className="w-[85%] md:w-[90%] py-4 text-[var(--color-secondary)]">
                Разделы
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <div onClick={() => setNav(false)} role="button" tabIndex={0}>
                  <li className="py-4 text-sm">Главная</li>
                </div>
              </Link>
              <Link href="/#about">
                <div onClick={() => setNav(false)} role="button" tabIndex={0}>
                  <li className="py-4 text-sm">Обо мне</li>
                </div>
              </Link>
              <Link href="/#reviews">
                <div onClick={() => setNav(false)} role="button" tabIndex={0}>
                  <li className="py-4 text-sm">Отзывы</li>
                </div>
              </Link>
              <Link href="/#contact">
                <div onClick={() => setNav(false)} role="button" tabIndex={0}>
                  <li className="py-4 text-sm">Контакты</li>
                </div>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[var(--color-secondary)]">
                Социальные сети
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <Icon Icon={SlSocialVkontakte} nav />
                <Icon Icon={FiPhoneCall} nav />
                <Icon Icon={AiOutlineMail} nav />
                <Icon Icon={BsFillPersonLinesFill} nav />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
