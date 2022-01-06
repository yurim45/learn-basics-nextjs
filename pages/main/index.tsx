import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Slider from './Slider';

const Main: NextPage = () => {
  return (
    <Index>
      <Slider />
      카드 카드
    </Index>
  );
};

export default Main;

const Index = styled.div`
  padding: 20px;
  background: rgba(255, 255, 255, 0.2);
`;
