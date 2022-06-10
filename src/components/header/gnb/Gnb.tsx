import React from 'react';
import styled from 'styled-components';
import flex from '@shared/styles/flex';

const Gnb = () => {
  return (
    <StGnb>
      <li>About Me</li>
      <li>Archive</li>
      <li>Skills</li>
      <li>Projects</li>
      <li>Career</li>
    </StGnb>
  );
};

export default Gnb;

const StGnb = styled.ul`
  color: var(--text-555);
  font-size: 18px;
  font-weight: 600;
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
