import { sendContactForm } from 'lib/api';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

export type FormData = {
  name: string;
  phoneNumber: string;
  email?: string;
  subject?: string;
  message: string;
};

const ContactForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormData>();

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful, reset]);

  const onSubmit = async (data: FormData) => {
    await sendContactForm(data);
  };

  return (
    <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
      <div className="p-4">
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <div className="grid md:grid-cols-2 gap-4 w-full py-2">
            <div className="flex flex-col">
              <label className="uppercase text-sm py-2" htmlFor="name">
                Имя
              </label>
              <input
                {...register('name', { required: true })}
                id="name"
                className={`border-2 rounded-lg p-3 flex ${
                  errors.name ? 'border-red-500 focus:outline-none' : 'border-gray-300'
                }`}
                type="text"
                aria-invalid={errors.name ? 'true' : 'false'}
              />
              {errors.name?.type === 'required' && (
                <p role="alert" className="text-red-500">
                  Введите имя
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <label className="uppercase text-sm py-2" htmlFor="phoneNumber">
                Номер телефона
              </label>
              <input
                {...register('phoneNumber', { required: true })}
                id="phoneNumber"
                className={`border-2 rounded-lg p-3 flex ${
                  errors.phoneNumber
                    ? 'border-red-500 focus:outline-none'
                    : 'border-gray-300'
                }`}
                type="tel"
              />
              {errors.phoneNumber?.type === 'required' && (
                <p role="alert" className="text-red-500">
                  Введите номер телефона
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col py-2">
            <label className="uppercase text-sm py-2" htmlFor="email">
              Электронная почта
            </label>
            <input
              {...register('email')}
              id="email"
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="email"
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="uppercase text-sm py-2" htmlFor="subject">
              Тема
            </label>
            <input
              {...register('subject')}
              id="subject"
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="uppercase text-sm py-2" htmlFor="message">
              Сообщение
            </label>
            <textarea
              {...register('message', { required: true })}
              id="message"
              className={`border-2 rounded-lg p-3 flex ${
                errors.message ? 'border-red-500 focus:outline-none' : 'border-gray-300'
              }`}
              rows={10}
            />
            {errors.message?.type === 'required' && (
              <p role="alert" className="text-red-500">
                Введите ваше сообщение
              </p>
            )}
          </div>
          <button className="w-full p-4 mt-4 text-gray-100" disabled={isSubmitting}>
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
