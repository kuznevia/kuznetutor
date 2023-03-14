import { FormData } from 'components/Forms/ContactForm';

export const sendContactForm = async (data: FormData) => {
  fetch('/api/contact', {
    method: 'post',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
};
