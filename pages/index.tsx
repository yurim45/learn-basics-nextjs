import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Product from './product/index';
import { getData, ProductType } from './api/api';

const Home: NextPage = () => {
  const [list, setList] = useState<ProductType>([]);

  useEffect(() => {
    getData().then((res) => setList(res));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <Head>
        <title>web template</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='Web template by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Product list={list.slice(0, 9)} title={'잘 나가요!'} />
        <Product list={list.slice(9)} title={'새로 나왔어요!'} />
      </main>
    </div>
  );
};

export default Home;
