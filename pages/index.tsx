import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Product from './product/index';
import { getProducts, ProductType } from './api/api';
import { Header, Loader } from 'semantic-ui-react';

const Home: NextPage = () => {
  const [list, setList] = useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(true);

  useEffect(() => {
    getProducts().then((res) => {
      setList(res);
      setIsLoading(false);
    });
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <Head>
        <title>web template</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='Web template by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {isLoading ? (
        <Loader inline='centered' active>
          Loading
        </Loader>
      ) : (
        <main>
          <Header as='h1'>상품을 둘러보세요!</Header>
          <Product list={list.slice(0, 9)} title={'잘 나가요!'} />
          <Product list={list.slice(9)} title={'새로 나왔어요!'} />
        </main>
      )}
    </div>
  );
};

export default Home;
