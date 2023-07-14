import React from 'react';
import Link from 'next/link';
import { thingsflow } from '@images/career/index';
import CareerLayout from '../common/CareerLayout';
import { styled } from '@shared/styles/theme';
import { tagText } from '@shared/styles/variables';

const Thingsflow = () => {
  return (
    <CareerLayout
      logo={thingsflow}
      company="Thingsflow"
      period="JAN 2023 ~ 현재"
    >
      <div>
        <StRole>
          자사 서비스{' '}
          <Link
            href={'https://storyplay.com/'}
            target="_blank"
            rel="noreferrer"
          >
            스토리플레이
          </Link>{' '}
          웹 기능 개발 및 유지 보수
        </StRole>
        <StContents>
          <StContent>
            <strong>✔️ 기간</strong>: 2023. 1.2 ~ 현재
          </StContent>
          <StContent>
            <strong>✔️ Skills </strong>:
            {[
              'Nextjs',
              'React',
              'Typescript',
              'Apollo GraphQL',
              'Redux-toolkit',
              '@emotion/styled',
            ].map((item, i) => (
              <StTag key={i}>{item}</StTag>
            ))}
          </StContent>
          <StContent>
            <strong>✔️ 담당 역할</strong>
            <ul>
              <li>
                ■ <strong>토스페이먼츠 연동</strong>
              </li>
              <li>
                ■{' '}
                <strong>
                  <Link
                    href={`https://velog.io/@april_5/%EC%9B%B9%EB%B7%B0-%ED%86%B5%EC%8B%A0-React-%EB%84%A4%EC%9D%B4%ED%8B%B0%EB%B8%8C-%EC%95%B1-React-React-%ED%86%B5%EC%8B%A0%ED%95%98%EA%B8%B0`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {`웹소설 > epub file viewer 개발 및 웹뷰 연동`}
                  </Link>
                </strong>
              </li>
              <li>
                ■{' '}
                <strong>
                  <Link
                    href={`https://velog.io/@april_5/%EC%8B%A4%EC%8A%B5-%EC%9B%B9-%EC%84%B1%EB%8A%A5-%EC%B5%9C%EC%A0%81%ED%99%94-%EC%8B%A4%EC%8A%B5%ED%95%98%EA%B8%B0`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    LightHouse를 활용한 성능 최적화
                  </Link>
                </strong>
              </li>
              <li>
                ■ <strong>Sentry 설정</strong>
              </li>
            </ul>
          </StContent>
        </StContents>
      </div>
    </CareerLayout>
  );
};

export default Thingsflow;

const StRole = styled.p`
  margin-bottom: 20px;
  color: var(--text-333);
  font-size: 18px;
  line-height: 1.5;
`;

const StContents = styled.ul`
  margin: 20px 0;
  color: var(--text-333);
  font-size: 18px;
`;

const StContent = styled.li`
  color: var(--text-555);
  line-height: 1.8;

  strong {
    color: var(--text-333);
    font-weight: 600;
  }

  ul {
    margin: 5px 0;
    padding-left: 20px;
  }
`;

const StTag = styled.button`
  ${tagText()};
`;
