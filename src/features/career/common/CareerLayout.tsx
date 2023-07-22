import React, { ReactNode } from 'react';
import Image, { StaticImageData } from 'next/image';
import styled from 'styled-components';
import flex from '@shared/styles/flex';

type PjLayoutProps = {
  logo: StaticImageData;
  company: string;
  period: string;
  children: ReactNode;
};
const CareerLayout = ({ logo, company, period, children }: PjLayoutProps) => {
  return (
    <StContainer>
      <StLogo>
        <Image alt="logo" src={logo} />
      </StLogo>
      <StContent>
        <StCompany>{company}</StCompany>
        <StEmploymentPeriod>{period}</StEmploymentPeriod>
        {children}
      </StContent>
    </StContainer>
  );
};

const StContainer = styled.div`
  ${flex({ justify: 'between', direction: 'row', align: 'start' })};
  width: 100%;
  margin-bottom: 100px;

  @media ${({ theme }) => theme.mobile} {
    ${flex({ direction: 'col' })};
    margin-bottom: 0;
  }
`;

const StLogo = styled.div`
  ${flex({})};
  width: 50%;
  padding: 30px;

  img {
    width: 120px;
    width: 120px;
  }
`;

const StContent = styled.div`
  width: 100%;
  padding: 30px;
  border-left: 1px dashed var(--compo-green);
`;

const StCompany = styled.h3`
  font-family: 'Black Han Sans', sans-serif;
  color: var(--text-green);
  font-size: 36px;

  @media ${({ theme }) => theme.mobile} {
    font-size: 32px;
  }
`;

const StEmploymentPeriod = styled.p`
  margin: 10px 0;
  color: var(--text-777);
  font-size: 16px;

  @media ${({ theme }) => theme.mobile} {
    font-size: 14px;
  }
`;

export default CareerLayout;
