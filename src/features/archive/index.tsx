import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { Layout } from '@components/index';
import { formSet } from '@shared/styles/variables';
import flex from '@shared/styles/flex';
import { github, velog } from '@images/archive/index';

const Archive = () => {
  return (
    <Layout
      pageTitle="Archive"
      lineColor="white"
      bgColor="compo-lilac"
      id="archive"
    >
      <StAlign>
        <StContainer>
          <StTitle>
            <Image alt="" src={github} width={50} height={50} />
            <strong>GitHub</strong>
          </StTitle>
          <StContent>
            <Link
              href="https://github.com/yurim45"
              target="_blank"
              rel="noreferrer"
            >
              <p>github.com/yurim45</p>
            </Link>
            <ul>
              <li>프로젝트의 소스 코드가 있습니다.</li>
              <li>코딩 연습을 위해 작업한 코드가 있습니다.</li>
            </ul>
          </StContent>
        </StContainer>
        <StContainer>
          <StTitle>
            <Image alt="" src={velog} width={50} height={50} />
            <strong>Velog</strong>
          </StTitle>
          <StContent>
            <Link
              href="https://velog.io/@april_5"
              target="_blank"
              rel="noreferrer"
            >
              <p>velog.io/@april_5</p>
            </Link>
            <ul>
              <li>공부한 것을 정리할 목적의 블로그입니다.</li>
              <li>개발하며 겪은 이야기를 공유합니다.</li>
              <li>지식 공유를 위해 작성하기도 합니다.</li>
            </ul>
          </StContent>
        </StContainer>
      </StAlign>
    </Layout>
  );
};

export default Archive;

const StContainer = styled.div`
  ${formSet()};
  margin: 40px;
  box-shadow: 1.95px 1.95px 2.6px rgb(137 134 134 / 15%);

  @media ${({ theme }) => theme.mobile} {
    margin: 30px;
  }
`;

const StAlign = styled.div`
  ${flex({ align: 'start' })};

  @media ${({ theme }) => theme.mobile} {
    flex-direction: column;
  }
`;

const StTitle = styled.div`
  ${flex({})};
  font-size: 24px;
  font-weight: 800;
  letter-spacing: -0.5px;

  strong {
    margin: 0 10px;
  }
`;

const StContent = styled.div`
  margin: 20px 0 10px;

  a {
    color: var(--text-blue);
    font-size: 16px;
    letter-spacing: -0.5px;
    text-align: center;
  }

  ul {
    margin: 20px 0;
    padding-left: 20px;
    list-style-type: square;
    color: var(--text-555);
    font-size: 16px;
    letter-spacing: -0.5px;

    li {
      padding: 5px 0;
    }
  }
`;
