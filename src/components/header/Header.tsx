import React, { useEffect, useState } from 'react';
import flex from '@shared/styles/flex';
import styled from 'styled-components';
import Gnb from './gnb/Gnb';
import DropBarMenu from './dropBarMenu/DropBarMenu';
import IconHamberger from '@components/icons/IconHamberger';
import GotoTop from '@components/footer/GotoTop';

const Header = () => {
  const [hasScroll, setHasScroll] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const updateScroll = () => {
    if (window?.scrollY >= 1200) {
      setHasScroll(true);
    } else {
      setHasScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);

    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  return (
    <>
      <StHeader hasScroll={hasScroll}>
        <Inner>
          <Logo>{"April's world"}</Logo>
          <Gnb />
          <button type="button" onClick={() => setIsOpen(!isOpen)}>
            <IconHamberger />
          </button>
        </Inner>
      </StHeader>
      {isOpen && hasScroll && <DropBarMenu />}
      {hasScroll && <GotoTop />}
    </>
  );
};

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

  @media ${({ theme }) => theme.mobile} {
    padding: 0 20px;
  }

  button {
    display: none;

    @media ${({ theme }) => theme.mobile} {
      display: block;
    }
  }
`;

const Logo = styled.div`
  color: var(--text-333);
  font-size: 24px;
  font-weight: 600;

  @media ${({ theme }) => theme.mobile} {
    font-size: 20px;
  }
`;

export default Header;
