import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { formSet } from '@shared/styles/variables';
import flex from '@shared/styles/flex';
import { logoVercel, logoNCP } from '@images/skills/index';

const Deployment = () => {
  return (
    <StContainer>
      <h3>Deployment</h3>
      <ul>
        <li>
          <Image
            alt="Vercel-Logo"
            src={logoVercel}
            width="100%"
            height="100%"
            objectFit="contain"
          />
        </li>
        <li>
          <Image
            alt="NCP-Logo"
            src={logoNCP}
            width="100%"
            height="100%"
            objectFit="contain"
          />
        </li>
      </ul>
    </StContainer>
  );
};

export default Deployment;

const StContainer = styled.div`
  ${flex({ justify: 'start', direction: 'col' })};
  ${formSet()};

  h3 {
    margin-bottom: 20px;
    color: var(--text-yellow);
    font-size: 28px;
    font-weight: 600;
    white-space: nowrap;
  }

  li {
    margin: 10px 0;
    width: 150px;
    height: 100px;
    ${flex({})};
  }
`;
