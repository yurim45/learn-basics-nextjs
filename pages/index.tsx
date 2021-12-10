/* eslint-disable @next/next/no-sync-scripts */
import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import TabMenu from 'components/TabMenu';
import Main from './Main';
import Aside from 'components/Aside';
import { getProducts } from '../src/common/api/api';
import styled from 'styled-components';
import { flexSet } from '../src/common/styles/Variable';

const Home: NextPage = ({ list }: any) => {
  return (
    <div style={{ padding: '2rem' }}>
      <Head>
        <title>web template</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='Web template by create next app' />
        <link rel='icon' href='/favicon.ico' />
        {/* <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Lobster&family=Roboto&display=swap'
        /> */}
        <script
          src='https://kit.fontawesome.com/cc61c7cf90.js'
          // crossorigin='anonymous'
        ></script>
      </Head>
      <Index>
        <TabMenu />
        <Main />
        <Aside />
      </Index>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const data = await getProducts();

  return {
    props: {
      list: data,
    },
  };
}

const Index = styled.div`
  width: 1200px;
  height: 100vh;
  margin: 0 auto;
  /* ${flexSet('space-between', '', 'row')} */
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  border-radius: 2% 2% 0 0;
  color: ${({ theme }) => theme.colors.textColor};

  @media ${({ theme }) => theme.mobile} {
  }
`;
