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
          <Image alt="Notion-Logo" src={logoNotion} width={150} height={50} />
        </li>
        <li>
          <Image alt="Figma-Logo" src={logoFigma} width={150} height={70} />
        </li>
        <li>
          <Image
            alt="Jeplin-Logo"
            src={logoZeplin}
            width="100%"
            height="100%"
            objectFit="contain"
          />
        </li>
        <li>
          <Image alt="Monday-Logo" src={logoMonday} width={150} height={110} />
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
    width: 150px;
    height: 100px;
    ${flex({})};
  }
`;
