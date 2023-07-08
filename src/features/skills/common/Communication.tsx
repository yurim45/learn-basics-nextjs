import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { formSet } from '@shared/styles/variables';
import flex from '@shared/styles/flex';
import {
  logoFigma,
  logoMonday,
  logoNotion,
  logoZeplin,
} from '@images/skills/index';

const Communication = () => {
  return (
    <StContainer>
      <h3>Communication</h3>
      <ul>
        <li>
          <Image
            alt="Notion-Logo"
            src={logoNotion}
            layout="responsive"
            objectFit="contain"
          />
        </li>
        <li>
          <Image
            alt="Figma-Logo"
            src={logoFigma}
            layout="responsive"
            objectFit="contain"
          />
        </li>
        <li>
          <Image
            alt="Jeplin-Logo"
            src={logoZeplin}
            layout="responsive"
            objectFit="contain"
          />
        </li>
        <li>
          <Image
            alt="Monday-Logo"
            src={logoMonday}
            layout="responsive"
            objectFit="contain"
          />
        </li>
      </ul>
    </StContainer>
  );
};

export default Communication;

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
    width: 150px;
    max-height: 150px;
    ${flex({})};
  }
`;
