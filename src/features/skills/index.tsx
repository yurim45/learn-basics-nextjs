import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { Layout, GridLayout } from '@components/index';
import { formSet } from '@shared/styles/variables';
import flex from '@shared/styles/flex';

const Skills = () => {
  return (
    <GridLayout pageTitle="Skills" bgColor="bg-yellow" lineColor="yellow">
      <StContainer className="item1">
        <h3>Frontend</h3>
        <ul>
          <li>
            <Image
              alt="HTML-Logo"
              src="/images/skills/logo-html.png"
              width="100%"
              height="100%"
              objectFit="contain"
            />
          </li>
          <li>
            <Image
              alt="CSS-Logo"
              src="/images/skills/logo-css.png"
              width="100%"
              height="100%"
              objectFit="contain"
            />
          </li>
          <li>
            <Image
              alt="Styled-components-Logo"
              src="/images/skills/logo-sc.png"
              width="100%"
              height="100%"
              objectFit="contain"
            />
          </li>
          <li>
            <Image
              alt="JS-Logo"
              src="/images/skills/logo-js.png"
              width="100%"
              height="100%"
              objectFit="contain"
            />
          </li>
          <li>
            <Image
              alt="TS-Logo"
              src="/images/skills/logo-ts.png"
              width="100%"
              height="100%"
              objectFit="contain"
            />
          </li>
          <li>
            <Image
              alt="React-Logo"
              src="/images/skills/logo-react.png"
              width="100%"
              height="100%"
              objectFit="contain"
            />
          </li>
          <li>
            <Image
              alt="Storybook-Logo"
              src="/images/skills/logo-sb.webp"
              width={100}
              height={90}
            />
          </li>
          <li>
            <Image
              alt="Recoil-Logo"
              src="/images/skills/logo-recoil.png"
              width={100}
              height={40}
            />
          </li>
          <li>
            <Image
              alt="React-Query-Logo"
              src="/images/skills/logo-react-query.jpeg"
              width={100}
              height={70}
            />
          </li>
          <li>
            <Image
              alt="Nextjs-Logo"
              src="/images/skills/logo-nextjs.png"
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
              src="/images/skills/logo-git.png"
              width="100%"
              height="100%"
              objectFit="contain"
            />
          </li>
          <li>
            <Image
              alt="GitHub-Logo"
              src="/images/skills/logo-github.png"
              width="100%"
              height="100%"
              objectFit="contain"
            />
          </li>
          <li>
            <Image
              alt="GitLab-Logo"
              src="/images/skills/logo-gitlab.png"
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
              src="/images/skills/logo-rn.png"
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
              src="/images/skills/logo-vercel.png"
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
              alt="Jeplin-Logo"
              src="/images/skills/logo-zeplin.png"
              width="100%"
              height="100%"
              objectFit="contain"
            />
          </li>
          <li>
            <Image
              alt="Figma-Logo"
              src="/images/skills/logo-figma.png"
              width="100%"
              height="100%"
              objectFit="contain"
            />
          </li>
          <li>
            <Image
              alt="Monday-Logo"
              src="/images/skills/logo-monday.jpeg"
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
