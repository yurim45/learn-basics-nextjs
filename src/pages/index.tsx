import React from 'react';
import type { NextPage } from 'next';
import { Footer, Header } from '@components/index';
import Landing from '@features/landing';
import Introduce from '@features/introduce';
import Archive from '@features/archive';
import Skills from '@features/skills';
import Projects from '@features/projects';
import Career from '@features/career';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Landing />
      <Introduce />
      <Archive />
      <Skills />
      <Projects />
      {/* <Career /> */}
      <Footer />
    </>
  );
};

export default Home;
