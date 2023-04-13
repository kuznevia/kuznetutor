import ContactForm from '@/src/components/Forms/ContactForm';
import { Icon } from '@/src/components/ui/Icon';
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
    <div className="max-w-[1240px] m-auto px-2 py-8 w-full">
      <h2 className="py-4 text-[var(--color-secondary)]">Связаться со мной</h2>
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
              <h2 className="py-2 text-[var(--color-secondary)]">Надежда Кузнецова</h2>
              <p>Репетитор по истории и обществознанию</p>
              <p className="py-4">Персональные занятия в удаленном формате</p>
            </div>
            <div>
              <p className="uppercase">Свяжитесь со мной</p>
              <div className="flex items-center justify-between py-4">
                <Icon Icon={SlSocialVkontakte} />
                <Icon Icon={FiPhoneCall} />
                <Icon Icon={AiOutlineMail} />
                <Icon Icon={BsFillPersonLinesFill} />
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
            <HiOutlineChevronDoubleUp
              className="text-[var(--color-secondary)]"
              size={30}
            />
          </div>
        </Link>
      </div>
    </div>
  </div>
);

export default Contact;
