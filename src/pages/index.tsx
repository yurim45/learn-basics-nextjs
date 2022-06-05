import React, { useCallback, useEffect } from 'react';
import type { NextPage } from 'next';
import Lading from '@features/lading';
import Introduce from '@features/introduce';

const Home: NextPage = () => {
  const checkDeltaPower = useCallback(() => {
    console.log('==');
  }, []);

  return (
    <>
      <Lading />
      <Introduce />
    </>
  );
};

export default Home;
