import React from 'react';
import { atnp } from '@images/career/index';
import CareerLayout from '../common/CareerLayout';
import { styled } from '@shared/styles/theme';
import { tagText } from '@shared/styles/variables';

const Atnp = () => {
  return (
    <CareerLayout
      logo={atnp}
      company="At&P Partners"
      period="JAN 2022 ~ DEC 2022"
    >
      <div>
        <StRole>
          연말정산을 보다 효율적으로 운용할 수 있는 다양한 기능을 제공하는
          프로그램의 차세대 MVP 개발
        </StRole>
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
              <StTag key={i}>{item}</StTag>
            ))}
          </StContent>
          <StContent>
            <strong>✔️ 담당 역할</strong>
            <ul>
              <li>
                ■ <strong>MVP 개발(사용자용)</strong>
              </li>
            </ul>
          </StContent>
        </StContents>
      </div>
    </CareerLayout>
  );
};

export default Atnp;

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
