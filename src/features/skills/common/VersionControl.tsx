import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { formSet } from '@shared/styles/variables';
import flex from '@shared/styles/flex';
import { logoGit, logoGithub, logoGitlab } from '@images/skills/index';

const VersionControl = () => {
  return (
    <StContainer>
      <h3>Version Control</h3>
      <ul>
        <li>
          <Image alt="Git-Logo" src={logoGit} objectFit="contain" />
        </li>
        <li>
          <Image
            alt="GitHub-Logo"
            src={logoGithub}
            layout="responsive"
            objectFit="contain"
          />
        </li>
        <li>
          <Image
            alt="GitLab-Logo"
            src={logoGitlab}
            layout="responsive"
            objectFit="contain"
          />
        </li>
      </ul>
    </StContainer>
  );
};

export default VersionControl;

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
