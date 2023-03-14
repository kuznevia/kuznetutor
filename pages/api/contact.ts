// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { FormData } from 'components/Forms/ContactForm';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === 'POST') {
    const data: FormData = req.body;
  }
  return res.status(400).json({ name: 'Bad request' });
};

export default handler;
