import React from 'react';
import styled from 'styled-components';
import flex from '@shared/styles/flex';
import MenuList from './MenuList';

const Gnb = () => {
  return (
    <nav>
      <StGnb>
        <MenuList />
      </StGnb>
    </nav>
  );
};

export default Gnb;

const StGnb = styled.nav`
  color: var(--text-555);
  font-size: 18px;
  font-weight: 600;
  list-style: none;
  ${flex({
    justify: 'between',
  })};

  @media ${({ theme }) => theme.mobile} {
    display: none;
  }

  li {
    margin: 0 20px;
    cursor: pointer;
  }
`;
