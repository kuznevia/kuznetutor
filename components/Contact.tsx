import ContactForm from 'components/Forms/ContactForm';
import Image from 'next/image';
import Link from 'next/link';
import ContactImg from 'public/assets/contact.jpg';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FiPhoneCall } from 'react-icons/fi';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import { SlSocialVkontakte } from 'react-icons/sl';

const Contact = () => (
  <div id="contact" className="w-full lg:h-screen ">
    <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
      <p className="text-xl tracking-widest uppercase text-[#5651e5]">Контакты</p>
      <h2 className="py-4">Связаться со мной</h2>
      <div className="grid lg:grid-cols-5 gap-8">
        {/* left */}
        <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="lg:p-4 h-full">
            <div>
              <Image
                className="rounded-xl hover:scale-105 ease-in duration-300"
                src={ContactImg}
                alt="/"
              />
            </div>
            <div>
              <h2 className="py-2">Надежда Кузнецова</h2>
              <p>Репетитор по истории и обществознанию</p>
              <p className="py-4">Персональные занятия в удаленном формате</p>
            </div>
            <div>
              <p className="uppercase pt-8">Свяжитесь со мной</p>
              <div className="flex items-center justify-between py-4">
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
        {/* right */}
        <ContactForm />
      </div>
      <div className="flex justify-center py-12">
        <Link href="/">
          <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 hover:shadow-gray-700 ease-in duration-300">
            <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
          </div>
        </Link>
      </div>
    </div>
  </div>
);

export default Contact;
