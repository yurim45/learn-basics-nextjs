import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { GridLayout } from '@components/index';
import { formSet } from '@shared/styles/variables';
import flex from '@shared/styles/flex';
import {
  logoCss,
  logoFigma,
  logoGit,
  logoGithub,
  logoGitlab,
  logoHtml,
  logoJs,
  logoMonday,
  logoNCP,
  logoNextjs,
  logoNotion,
  logoRQ,
  logoReact,
  logoRecoil,
  logoRN,
  logoSB,
  logoSC,
  logoTS,
  logoVercel,
  logoZeplin,
} from '@images/skills/index';

const Skills = () => {
  return (
    <GridLayout
      pageTitle="Skills"
      bgColor="bg-yellow"
      lineColor="yellow"
      id="skills"
    >
      <StContainer className="frontend">
        <h3>Frontend</h3>
        <ul>
          <li>
            <Image
              alt="HTML-Logo"
              src={logoHtml}
              width="100%"
              height="100%"
              objectFit="contain"
            />
          </li>
          <li>
            <Image
              alt="CSS-Logo"
              src={logoCss}
              width="100%"
              height="100%"
              objectFit="contain"
            />
          </li>
          <li>
            <Image
              alt="Styled-components-Logo"
              src={logoSC}
              width="100%"
              height="100%"
              objectFit="contain"
            />
          </li>
          <li>
            <Image
              alt="JS-Logo"
              src={logoJs}
              width="100%"
              height="100%"
              objectFit="contain"
            />
          </li>
          <li>
            <Image
              alt="TS-Logo"
              src={logoTS}
              width="100%"
              height="100%"
              objectFit="contain"
            />
          </li>
          <li>
            <Image
              alt="React-Logo"
              src={logoReact}
              width="100%"
              height="100%"
              objectFit="contain"
            />
          </li>
          <li>
            <Image alt="Storybook-Logo" src={logoSB} width={100} height={90} />
          </li>
          <li>
            <Image alt="Recoil-Logo" src={logoRecoil} width={100} height={40} />
          </li>
          <li>
            <Image
              alt="React-Query-Logo"
              src={logoRQ}
              width={100}
              height={70}
            />
          </li>
          <li>
            <Image
              alt="Nextjs-Logo"
              src={logoNextjs}
              width="100%"
              height="100%"
              objectFit="contain"
            />
          </li>
        </ul>
      </StContainer>
      <StContainer>
        <h3>Communication</h3>
        <ul>
          <li>
            <Image
              alt="Notion-Logo"
              src={logoNotion}
              width="100%"
              height="100%"
              objectFit="contain"
            />
          </li>
          <li>
            <Image
              alt="Figma-Logo"
              src={logoFigma}
              width="100%"
              height="100%"
              objectFit="contain"
            />
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
            <Image
              alt="Monday-Logo"
              src={logoMonday}
              width="100%"
              height="100%"
              objectFit="contain"
            />
          </li>
        </ul>
      </StContainer>

      <StContainer>
        <h3>Mobile App</h3>
        <ul>
          <li>
            <Image
              alt="React-Native-Logo"
              src={logoRN}
              width="100%"
              height="100%"
              objectFit="contain"
            />
          </li>
        </ul>
      </StContainer>
      <StContainer>
        <h3>Deployment</h3>
        <ul>
          <li>
            <Image
              alt="Vercel-Logo"
              src={logoVercel}
              width="100%"
              height="100%"
              objectFit="contain"
            />
          </li>
          <li>
            <Image
              alt="NCP-Logo"
              src={logoNCP}
              width="100%"
              height="100%"
              objectFit="contain"
            />
          </li>
        </ul>
      </StContainer>
      <StContainer>
        <h3>Version Control</h3>
        <ul>
          <li>
            <Image
              alt="Git-Logo"
              src={logoGit}
              width="100%"
              height="100%"
              objectFit="contain"
            />
          </li>
          <li>
            <Image
              alt="GitHub-Logo"
              src={logoGithub}
              width="100%"
              height="100%"
              objectFit="contain"
            />
          </li>
          <li>
            <Image
              alt="GitLab-Logo"
              src={logoGitlab}
              width="100%"
              height="100%"
              objectFit="contain"
            />
          </li>
        </ul>
      </StContainer>
    </GridLayout>
  );
};

export default Skills;

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
