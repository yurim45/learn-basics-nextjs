import Footer from 'components/Footer';
import Top from 'components/Top';
import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Main: NextPage = () => {
  return (
    <Index>
      <Top />
      <Footer />
    </Index>
  );
};

export default Main;

const Index = styled.div`
  padding: 20px;
  background: rgba(255, 255, 255, 0.2);
`;
