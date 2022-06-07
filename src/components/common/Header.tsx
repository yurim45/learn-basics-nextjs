import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Header = () => {
  const [hasScroll, setHasScroll] = useState<boolean>(false);

  const updateScroll = () => {
    if (window?.scrollY >= 1063) {
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
      <Logo>{"April's world"}</Logo>
      <Gnb>
        <li>About Me</li>
        <li>Archiving</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Career</li>
      </Gnb>
    </StHeader>
  );
};

export default Header;

const StHeader = styled.header<{ hasScroll: boolean }>`
  position: fixed;
  width: 100vw;
  height: 60px;
  background: var(--white);
  box-shadow: rgb(0 0 0 / 15%) 1.95px 1.95px 2.6px;
  opacity: ${({ hasScroll }) => (hasScroll ? '100%' : 0)};
  z-index: 200;
`;

const Logo = styled.div``;

const Gnb = styled.ul``;
