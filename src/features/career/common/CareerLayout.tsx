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
        <Image alt="logo" src={logo} width={120} height={120} />
      </StLogo>
      <StContent>
        <StCompany>{company}</StCompany>
        <StEmploymentPeriod>{period}</StEmploymentPeriod>
        {children}
      </StContent>
    </StContainer>
  );
};

export default CareerLayout;

const StContainer = styled.div`
  ${flex({ justify: 'between', direction: 'row', align: 'start' })};
  width: 100%;
  margin-bottom: 100px;

  @media ${({ theme }) => theme.mobile} {
    ${flex({ direction: 'col' })};
  }
`;

const StLogo = styled.div`
  ${flex({})};
  width: 50%;
  padding: 30px;
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
`;

const StEmploymentPeriod = styled.p`
  margin: 10px 0;
  color: var(--text-777);
  font-size: 16px;
`;
