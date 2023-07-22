import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { formSet, skillTitle } from '@shared/styles/variables';
import flex from '@shared/styles/flex';
import { logoVercel, logoNCP } from '@images/skills/index';

const Deployment = () => {
  return (
    <StContainer>
      <h3>Deployment</h3>
      <ul>
        <li>
          <Image alt="Vercel-Logo" src={logoVercel} />
        </li>
        <li>
          <Image alt="NCP-Logo" src={logoNCP} />
        </li>
      </ul>
    </StContainer>
  );
};

const StContainer = styled.div`
  ${flex({ justify: 'start', direction: 'col' })};
  ${formSet()};

  h3 {
    ${skillTitle()};
  }

  li {
    margin: 10px 0;
    padding: 10px;
    ${flex({})};

    img {
      width: 80px;
      width: 80px;
    }
  }

  @media ${({ theme }) => theme.mobile} {
    li {
      img {
        width: 60px;
        width: 60px;
      }
    }
  }
`;

export default Deployment;
