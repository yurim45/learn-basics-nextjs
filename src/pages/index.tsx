import React, { useCallback, useEffect } from 'react';
import type { NextPage } from 'next';
import { Header } from '@components/common/index';
import Lading from '@features/lading';
import Introduce from '@features/introduce';
import Skills from '@features/skills';

const Home: NextPage = () => {
  const checkDeltaPower = useCallback(() => {
    console.log('==');
  }, []);

  return (
    <>
      <Header />
      <Lading />
      <Introduce />
      <Skills />
    </>
  );
};

export default Home;
