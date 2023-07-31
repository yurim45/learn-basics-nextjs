import React from 'react';
import { atnp } from '@images/career/index';
import { CareerLayout, Role, Tag } from '../common';
import { styled } from '@shared/styles/theme';

const Atnp = () => {
  return (
    <CareerLayout
      logo={atnp}
      company="At&P Partners"
      period="JAN 2022 ~ DEC 2022"
    >
      <div>
        <Role>
          연말정산을 보다 효율적으로 운용할 수 있는 다양한 기능의 차세대
          프로그램 MVP 개발
        </Role>
        <StContents>
          <StContent>
            <strong>✔️ 기간</strong>: 2022. 1.24 ~ 12.19
          </StContent>
          <StContent>
            <strong>✔️ Skills </strong>:
            {[
              'Nextjs',
              'React',
              'Typescript',
              'React-Query',
              'Recoil',
              'StoryBook',
              'Styled-Components',
            ].map((item, i) => (
              <Tag key={i}>{item}</Tag>
            ))}
          </StContent>
          <StContent>
            <strong>✔️ 담당 역할</strong>
            <ul>
              <li>■ MVP 개발(사용자용)</li>
            </ul>
          </StContent>
        </StContents>
      </div>
    </CareerLayout>
  );
};

const StContents = styled.ul`
  margin: 20px 0;
  color: var(--text-333);
  font-size: 18px;

  @media ${({ theme }) => theme.mobile} {
    font-size: 16px;
  }
`;

const StContent = styled.li`
  color: var(--text-555);
  line-height: 1.8;

  strong {
    color: var(--text-333);
  }

  ul {
    margin: 5px 0;
    padding-left: 20px;
  }
`;

export default Atnp;
