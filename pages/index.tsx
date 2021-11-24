import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { getData, Product } from './api/api';

const Home: NextPage = () => {
  const [list, setList] = useState<Product>();

  useEffect(() => {
    getData().then((res) => setList(res));
  }, []);

  console.log(list);

  return (
    <div style={{ padding: '2rem' }}>
      <Head>
        <title>web template</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='Web template by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main></main>
    </div>
  );
};

export default Home;
