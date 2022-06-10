import React, { useCallback, useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { Footer, Header } from '@components/index';
import Landing from '@features/landing';
import Introduce from '@features/introduce';
import Archive from '@features/archive';
import Skills from '@features/skills';
import Projects from '@features/projects';
import Career from '@features/career';

const Home: NextPage = () => {
  const [page, setPage] = useState<string>('1');

  const checkDeltaPower = useCallback(() => {
    console.log('==');
  }, []);

  useEffect(() => {
    window.addEventListener('wheel', (e) => {
      e.preventDefault();
      console.log(e);
      if (e.deltaY > 0) {
        setPage('2');
      } else {
        setPage('1');
      }
    });
    // var posTop =(page-1) * $(window).height();
    // mHtml.animate({scrollTop : posTop});
    // https://itstudy-mary.tistory.com/371
  }, []);

  return (
    <>
      <Header />
      <Landing />
      <Introduce />
      <Archive />
      <Skills />
      <Projects />
      <Career />
      <Footer />
    </>
  );
};

export default Home;
