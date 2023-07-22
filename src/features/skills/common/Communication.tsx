import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { formSet, skillTitle } from '@shared/styles/variables';
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

export default Communication;
