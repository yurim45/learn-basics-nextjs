import React, { useCallback, useEffect } from 'react';
import type { NextPage } from 'next';
import Lading from '@features/lading';
import Introduce from '@features/introduce';
import Header from '@components/common/Header';

const Home: NextPage = () => {
  const checkDeltaPower = useCallback(() => {
    console.log('==');
  }, []);

  return (
    <>
      <Header />
      <Lading />
      <Introduce />
    </>
  );
};

export default Home;
