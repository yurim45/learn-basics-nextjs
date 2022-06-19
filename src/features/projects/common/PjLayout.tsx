import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { pjTitle, pjDesc } from '@shared/styles/variables';

type PjLayoutProps = {
  children: ReactNode;
  title: string;
  subTitle: string;
};
const PjLayout = ({ children, title, subTitle }: PjLayoutProps) => {
  return (
    <>
      <StTitle>{title}</StTitle>
      <StDesc>{subTitle}</StDesc>
      <div>{children}</div>
    </>
  );
};

export default PjLayout;

const StTitle = styled.h2`
  ${pjTitle()};
`;

const StDesc = styled.p`
  ${pjDesc()};
`;
