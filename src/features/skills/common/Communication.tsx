import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { formSet } from '@shared/styles/variables';
import flex from '@shared/styles/flex';
import {
  logoFigma,
  logoJira,
  logoNotion,
  logoZeplin,
} from '@images/skills/index';

const Communication = () => {
  return (
    <StContainer>
      <h3>Communication</h3>
      <ul>
        <li>
          <Image alt="Notion-Logo" src={logoNotion} />
        </li>
        <li>
          <Image alt="Figma-Logo" src={logoFigma} />
        </li>
        <li>
          <Image alt="Jeplin-Logo" src={logoZeplin} />
        </li>
        <li>
          <Image alt="Jira-Logo" src={logoJira} />
        </li>
      </ul>
    </StContainer>
  );
};

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

export default Communication;
