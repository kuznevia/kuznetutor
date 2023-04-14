import Image from 'next/image';
import Link from 'next/link';
import ContactImg from 'public/assets/contact.jpg';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FiPhoneCall } from 'react-icons/fi';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import { SlSocialVkontakte } from 'react-icons/sl';
import { TfiWrite } from 'react-icons/tfi';
import ContactForm from 'src/components/Forms/ContactForm';
import { Icon } from 'src/components/ui/Icon';
import { links } from 'src/utils/links';

const Contact = () => (
  <div id="contact" className="w-full lg:h-screen px-2 py-8">
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
            <div className="flex flex-col justify-center items-center lg:mt-16">
              <h2 className="pt-2 text-[var(--color-secondary)]">Мои контакты:</h2>
              <h3 className="pt-2">
                <Link
                  className="hover:text-[var(--color-secondary)] ml-2"
                  href={links.call()}
                >
                  +7-905-205-03-13
                </Link>
              </h3>
              <h3 className="pt-2">
                <Link
                  className="hover:text-[var(--color-secondary)] ml-2"
                  href={links.sendEmail()}
                >
                  evstanini@gmail.com
                </Link>
              </h3>
              <h3 className="pt-2">
                <Link
                  className="hover:text-[var(--color-secondary)] ml-2"
                  href={links.vk()}
                >
                  Вконтакте
                </Link>
              </h3>
              <div className="w-full flex items-center justify-around py-4">
                <Icon link={links.vk()} Icon={SlSocialVkontakte} />
                <Icon link={links.call()} Icon={FiPhoneCall} />
                <Icon link={links.sendEmail()} Icon={AiOutlineMail} />
                <Icon link={links.write()} Icon={TfiWrite} />
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
