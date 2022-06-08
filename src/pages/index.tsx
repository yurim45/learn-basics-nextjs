import React, { useCallback, useEffect } from 'react';
import type { NextPage } from 'next';
import { Header } from '@components/index';
import Landing from '@features/landing';
import Introduce from '@features/introduce';
import Skills from '@features/skills';

const Home: NextPage = () => {
  const checkDeltaPower = useCallback(() => {
    console.log('==');
  }, []);

  return (
    <>
      <Header />
      <Landing />
      <Introduce />
      <Skills />
    </>
  );
};

export default Home;
