import { PrismaClient } from '@prisma/client';
import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { useRef } from 'react';
import About from 'src/components/About';
import Contact from 'src/components/Contact';
import Main from 'src/components/Main';
import Navbar from 'src/components/Navbar';
import Reviews from 'src/components/Reviews';
import { IReview } from 'src/models/Client';

const prisma = new PrismaClient();

export const getStaticProps = async () => {
  const reviews: IReview[] = await prisma.review.findMany();
  return {
    props: {
      reviews,
    },
  };
};

export default function Home({
  reviews,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <Head>
        <title>Репетитор Надежда Кузнецова</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/logo.png" />
      </Head>
      <Navbar inputRef={inputRef} />
      <Main inputRef={inputRef} />
      <About />
      <Reviews reviews={reviews} />
      <Contact inputRef={inputRef} />
    </>
  );
}
