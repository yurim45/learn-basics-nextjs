import React, { ReactNode } from 'react';
import { styled } from '@shared/styles/theme';
import flex from '@shared/styles/flex';
import { sectionTitle } from '@shared/styles/variable';

type LayoutProps = {
  pageTitle: string;
  children: ReactNode;
  bgColor?: string;
  lineColor?: string;
};

const Layout = ({
  pageTitle,
  children,
  bgColor = 'white',
  lineColor = 'blue',
}: LayoutProps) => {
  return (
    <StSction bgColor={bgColor}>
      <Inner>
        <h2>{pageTitle}</h2>
        <StLine lineColor={lineColor} />
        <StContent>{children}</StContent>
      </Inner>
    </StSction>
  );
};

export default Layout;

const StSction = styled.section<{ bgColor: string }>`
  ${flex({
    direction: 'col',
  })};
  width: 100vw;
  height: 80vh;
  background: ${({ bgColor }) => `var(--${bgColor})`};
`;

const Inner = styled.div`
  max-width: 1140px;

  h2 {
    ${sectionTitle()};
  }
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

  img {
    border-radius: 50%;
  }
`;

const StText = styled.div`
  color: var(--text-333);
  padding-left: 200px;

  @media ${({ theme }) => theme.mobile} {
    margin: 20px 0;
    padding: 0;
    text-align: center;
  }

  strong {
    font-size: 32px;
    font-weight: 800;
    letter-spacing: 10px;
  }

  span {
    color: var(--text-777);
    font-size: 18px;

    @media ${({ theme }) => theme.mobile} {
      display: block;
      font-size: 16px;
    }
  }

  p {
    margin: 20px 0;
    font-size: 18px;
    line-height: 1.2;

    @media ${({ theme }) => theme.mobile} {
      font-size: 14px;
    }
  }
`;
