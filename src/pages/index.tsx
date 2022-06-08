import React, { useCallback, useEffect } from 'react';
import type { NextPage } from 'next';
import { Footer, Header } from '@components/index';
import Landing from '@features/landing';
import Introduce from '@features/introduce';
import Archiving from '@features/archiving';
import Skills from '@features/skills';
import Projects from '@features/projects';
import Career from '@features/career';

const Home: NextPage = () => {
  const checkDeltaPower = useCallback(() => {
    console.log('==');
  }, []);

  return (
    <>
      <Header />
      <Landing />
      <Introduce />
      <Archiving />
      <Skills />
      <Projects />
      <Career />
      <Footer />
    </>
  );
};

export default Home;
