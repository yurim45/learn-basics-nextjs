import React, { ReactNode } from 'react';
import { styled } from '@shared/styles/theme';
import flex from '@shared/styles/flex';
import { sectionTitle } from '@shared/styles/variables';

type LayoutProps = {
  pageTitle: string;
  children: ReactNode;
  color?: string;
  bgColor?: string;
  lineColor?: string;
  id?: string;
};

const Layout = ({
  pageTitle,
  children,
  bgColor = 'white',
  color = 'text-333',
  lineColor = 'blue',
  id,
}: LayoutProps) => {
  return (
    <StSction bgColor={bgColor} id={id}>
      <Inner>
        <StTitle color={color}>{pageTitle}</StTitle>
        <StLine lineColor={lineColor} />
        <StContent>{children}</StContent>
      </Inner>
    </StSction>
  );
};

export default Layout;

const StSction = styled.section<{ bgColor: string }>`
  width: 100vw;
  padding: 150px 0;
  background: ${({ bgColor }) => `var(--${bgColor})`};
  overflow: hidden;

  @media ${({ theme }) => theme.mobile} {
    padding: 100px 0;
  }
`;

const Inner = styled.div`
  max-width: 1140px;
  margin: auto;
`;

const StTitle = styled.h2<{ color: string }>`
  ${sectionTitle()};
  color: ${({ color }) => `var(--${color})`};
`;

const StLine = styled.div<{ lineColor: string }>`
  width: 50px;
  margin: 50px auto;
  border-bottom: 2px solid ${({ lineColor }) => `var(--${lineColor})`};
`;

const StContent = styled.div`
  ${flex};
  padding: 20px 0;

  @media ${({ theme }) => theme.mobile} {
    ${flex({
      direction: 'col',
    })};
  }
`;
