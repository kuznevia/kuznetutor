import { Input } from 'components/ui/Input';
import { TextArea } from 'components/ui/TextArea';
import { sendContactForm } from 'data/api';
import { getSecondsString } from 'data/utils';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export type FormData = {
  name: string;
  phoneNumber: string;
  email?: string;
  subject?: string;
  message: string;
};

enum FormState {
  filling = 'filling',
  submitting = 'submitting',
  sent = 'sent',
  notSent = 'notSent',
}

const ContactForm = () => {
  const [formState, setFormState] = useState<FormState>(FormState.filling);
  const [formError, setFormError] = useState('');
  const [count, setCount] = useState(10);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setFormState(FormState.submitting);

    try {
      await sendContactForm(data);
      setFormState(FormState.sent);
      reset();
    } catch (error) {
      setFormState(FormState.notSent);
      if (error instanceof Error) {
        setFormError(error.message);
      }
    }
  };

  if (formState === FormState.sent || formState === FormState.notSent) {
    if (count > 0) {
      setTimeout(() => {
        setCount(count - 1);
      }, 1000);
    }
    return (
      <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4 flex justify-center items-center">
        <div className="py-10">
          <h2 className="py-2">
            {formState === FormState.sent ? 'Форма отправлена' : 'Форма не отправлена'}
          </h2>
          {formState === FormState.notSent && (
            <p className="text-center">{formError || 'Неизвестная ошибка'}</p>
          )}
          <button
            className={`w-full p-4 mt-4 text-gray-100 ${count > 0 && 'opacity-60'}`}
            onClick={() => {
              setFormState(FormState.filling);
              setCount(10);
            }}
            disabled={count > 0}
          >
            Заполнить повторно {count > 0 && `через ${count} ${getSecondsString(count)}`}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
      <div className="p-4">
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <div className="grid md:grid-cols-2 gap-4 w-full py-2">
            <div className="flex flex-col">
              <label className="uppercase text-sm py-2" htmlFor="name">
                Имя
              </label>
              <Input
                {...register('name', { required: true })}
                error={errors.name && { error: errors.name, text: 'Введите имя' }}
              />
            </div>
            <div className="flex flex-col">
              <label className="uppercase text-sm py-2" htmlFor="phoneNumber">
                Номер телефона
              </label>
              <Input
                {...register('phoneNumber', { required: true })}
                type="tel"
                error={
                  errors.phoneNumber && {
                    error: errors.phoneNumber,
                    text: 'Введите номер телефона',
                  }
                }
              />
            </div>
          </div>
          <div className="flex flex-col py-2">
            <label className="uppercase text-sm py-2" htmlFor="email">
              Электронная почта
            </label>
            <Input {...register('email')} type="email" />
          </div>
          <div className="flex flex-col py-2">
            <label className="uppercase text-sm py-2" htmlFor="subject">
              Тема
            </label>
            <Input {...register('subject')} />
          </div>
          <div className="flex flex-col py-2">
            <label className="uppercase text-sm py-2" htmlFor="message">
              Сообщение
            </label>
            <TextArea
              {...register('message', { required: true })}
              error={
                errors.message && {
                  error: errors.message,
                  text: 'Введите ваше сообщение',
                }
              }
              rows={10}
            />
          </div>
          <button
            className={`w-full p-4 mt-4 text-gray-100 ${
              formState !== FormState.filling && 'opacity-60'
            }`}
            disabled={formState !== FormState.filling}
          >
            {formState === FormState.filling ? 'Отправить' : 'Отправка...'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
