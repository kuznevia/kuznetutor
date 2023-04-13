import { FormData } from '@/src/components/Forms/ContactForm';

export const sendEmail = async (data: FormData) =>
  fetch('/api/contact', {
    method: 'post',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }).then((res) => {
    if (!res.ok) {
      throw new Error('Failed to send message');
    }
    return res.json();
  });
