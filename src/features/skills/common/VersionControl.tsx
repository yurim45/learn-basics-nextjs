import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { formSet, skillTitle } from '@shared/styles/variables';
import flex from '@shared/styles/flex';
import { logoGit, logoGithub, logoGitlab } from '@images/skills/index';

const VersionControl = () => {
  return (
    <StContainer>
      <h3>Version Control</h3>
      <ul>
        <li>
          <Image alt="Git-Logo" src={logoGit} />
        </li>
        <li>
          <Image alt="GitHub-Logo" src={logoGithub} />
        </li>
        <li>
          <Image alt="GitLab-Logo" src={logoGitlab} />
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

export default VersionControl;
