import React, { useEffect, useState } from 'react';
import flex from '@shared/styles/flex';
import styled from 'styled-components';
import Gnb from './gnb/Gnb';

const Header = () => {
  const [hasScroll, setHasScroll] = useState<boolean>(false);

  const updateScroll = () => {
    if (window?.scrollY >= 1200) {
      setHasScroll(true);
    } else {
      setHasScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
    () => window.removeEventListener('scroll', updateScroll);
  }, []);

  return (
    <StHeader hasScroll={hasScroll}>
      <Inner>
        <Logo>{"April's world"}</Logo>
        <Gnb />
      </Inner>
    </StHeader>
  );
};

export default Header;

const StHeader = styled.header<{ hasScroll: boolean }>`
  position: fixed;
  width: 100vw;
  height: 60px;
  padding: 18px 0;
  background: var(--white);
  box-shadow: rgb(0 0 0 / 15%) 1.95px 1.95px 2.6px;
  opacity: ${({ hasScroll }) => (hasScroll ? '100%' : 0)};
  z-index: 200;
`;

const Inner = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  ${flex({
    justify: 'between',
  })};
`;

const Logo = styled.div`
  color: var(--text-333);
  font-size: 24px;
  font-weight: 600;
`;
