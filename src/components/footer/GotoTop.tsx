import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { animateScroll as scroll } from 'react-scroll';
import upArrow from '@images/up-arrow.png';

const GotoTop = () => {
  return (
    <StTopButton type="button" onClick={() => scroll.scrollToTop()}>
      <Image alt="" src={upArrow} width={50} height={50} />
    </StTopButton>
  );
};

export default GotoTop;

const StTopButton = styled.button`
  position: fixed;
  bottom: 50px;
  right: 60px;
`;
