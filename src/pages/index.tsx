/* eslint-disable @next/next/no-sync-scripts */
import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import TabMenu from 'components/common/TabMenu';
import styled from 'styled-components';
import Footer from 'components/common/Footer';

const Home: NextPage = () => {
  return (
    <Index>
      <TabMenu />
      <Footer />
    </Index>
  );
};

export default Home;

const Index = styled.div`
  height: 100vh;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  border-radius: 2% 2% 0 0;
  color: var(--text-555);
`;
