import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { pjTitle, pjDesc, formSet } from '@shared/styles/variables';

type PjLayoutProps = {
  title: string;
  subTitle: string;
  children: ReactNode;
};
const PjLayout = ({ title, subTitle, children }: PjLayoutProps) => {
  return (
    <StContainer>
      <StTitle>{title}</StTitle>
      <StDesc>{subTitle}</StDesc>
      <div>{children}</div>
    </StContainer>
  );
};

const StContainer = styled.div`
  ${formSet()};
  margin: 0 40px;
  width: 1060px;
  height: 800px;

  :hover {
    transform: none;
  }

  @media ${({ theme }) => theme.mobile} {
    width: 90vw;
    height: 100%;
    margin: 0 20px;
  }
`;

const StTitle = styled.h2`
  ${pjTitle()};
`;

const StDesc = styled.p`
  ${pjDesc()};
`;

export default PjLayout;
