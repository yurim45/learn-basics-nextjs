import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { formSet } from '@shared/styles/variables';
import flex from '@shared/styles/flex';
import { logoRN } from '@images/skills/index';

const MobileApp = () => {
  return (
    <StContainer>
      <h3>Mobile App</h3>
      <ul>
        <li>
          <Image alt="React-Native-Logo" src={logoRN} />
        </li>
      </ul>
    </StContainer>
  );
};

export default MobileApp;

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
    padding: 10px;
    ${flex({})};

    img {
      width: 80px;
      width: 80px;
    }
  }
`;
