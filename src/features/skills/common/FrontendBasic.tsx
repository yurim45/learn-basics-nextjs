import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { formSet, skillTitle } from '@shared/styles/variables';
import flex from '@shared/styles/flex';
import { logoCss, logoHtml, logoJs, logoTS } from '@images/skills/index';

const FrontendBasic = () => {
  return (
    <StContainer>
      <h3>Basic</h3>
      <ul>
        <li>
          <Image alt="HTML-Logo" src={logoHtml} />
        </li>
        <li>
          <Image alt="CSS-Logo" src={logoCss} />
        </li>
        <li>
          <Image alt="JS-Logo" src={logoJs} />
        </li>
        <li>
          <Image alt="TS-Logo" src={logoTS} />
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

export default FrontendBasic;
