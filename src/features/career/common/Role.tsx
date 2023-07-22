import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Role = ({ children }: { children: ReactNode }) => {
  return <StRole>{children}</StRole>;
};

export default Role;

const StRole = styled.p`
  margin-bottom: 20px;
  color: var(--text-333);
  font-size: 18px;
  line-height: 1.5;

  @media ${({ theme }) => theme.mobile} {
    font-size: 16px;
  }
`;
