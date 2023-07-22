import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { formSet } from '@shared/styles/variables';
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

export default FrontendBasic;
