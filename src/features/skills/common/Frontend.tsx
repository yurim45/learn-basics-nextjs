import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { formSet } from '@shared/styles/variables';
import flex from '@shared/styles/flex';
import {
  logoNextjs,
  logoRQ,
  logoReact,
  logoRecoil,
  logoSB,
  logoSC,
  logoApollo,
  logoGraphql,
} from '@images/skills/index';

const Framework = () => {
  return (
    <StContainer className="frontend">
      <h3>Frontend</h3>
      <ul>
        <li>
          <Image alt="Nextjs-Logo" src={logoNextjs} />
        </li>
        <li>
          <Image alt="React-Logo" src={logoReact} />
        </li>
        <li>
          <Image alt="Apollo-Graphql-Logo" src={logoApollo} />
        </li>
        <li>
          <Image alt="Graphql-Logo" src={logoGraphql} />
        </li>
        <li>
          <Image alt="Recoil-Logo" src={logoRecoil} />
        </li>
        <li>
          <Image alt="React-Query-Logo" src={logoRQ} />
        </li>
        <li>
          <Image alt="Styled-components-Logo" src={logoSC} />
        </li>
        <li>
          <Image alt="Storybook-Logo" src={logoSB} />
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

export default Framework;
