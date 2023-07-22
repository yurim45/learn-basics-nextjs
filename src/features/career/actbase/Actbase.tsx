import React from 'react';
import Image from 'next/image';
import { actbase, ICOOQQA, appsotre } from '@images/career/index';
import { CareerLayout, Role, Tag } from '../common';
import { styled } from '@shared/styles/theme';
import flex from '@shared/styles/flex';
import { tagText } from '@shared/styles/variables';

const Actbase = () => {
  return (
    <CareerLayout logo={actbase} company="actbase" period="JUL 2021 ~ JAN 2022">
      <div>
        <Role>
          유아 재능 발견 플랫폼 서비스를 제공하는 아이쿠카 APP의 유지 보수 담당
        </Role>
        <Image alt="logo" src={ICOOQQA} width={800} height={690} />
        <StContents>
          <StContent>
            <strong>✔️ 기간</strong>: 2021. 8.26 ~ 12.31{' '}
          </StContent>
          <StContent>
            <strong>✔️ Skills </strong>:{' '}
            {['React-native', 'Javascript', 'CSS3'].map((item, i) => (
              <Tag key={i}>{item}</Tag>
            ))}
          </StContent>
          <StContent>
            <strong>✔️ 담당 역할</strong>: 앱 유지 보수
            <ul>
              <li>
                ■ <strong>AppStore 앱 심사 준비 및 승인</strong>{' '}
              </li>
              <li>ㅤ- IAP test: storeKit 생성 및 테스트 </li>
              <li>ㅤ- 앱 심사 준비 및 승인 </li>
              <li>
                ■ <strong>UIUX 개선</strong>{' '}
              </li>
              <li>ㅤ- class 영역 UIUX 개선 </li>
              <li>
                ■ <strong>기타/수정/오류</strong>{' '}
              </li>
              <li>ㅤ- FBsdk: ios 설치 및 딥링크 생성 </li>
              <li>ㅤ- Google Analytics: logPurchase() 구현</li>
              <li>ㅤ- 그 외 오류 사항 수정 등</li>
            </ul>
          </StContent>
        </StContents>
        <StButton
          type="button"
          onClick={() =>
            window.open(
              'https://apps.apple.com/kr/app/%EC%95%84%EC%9D%B4%EC%BF%A0%EC%B9%B4/id1500709264'
            )
          }
        >
          <Image alt="app store logo" src={appsotre} />
          <span>App Store Link</span>
        </StButton>
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

const StButton = styled.button`
  ${flex({})};
  padding: 15px 30px;
  background: var(--lightGray);
  font-size: 22px;
  border-radius: 10px;

  span {
    margin-left: 30px;
    color: var(--text-777);
    text-decoration: underline;
  }

  img {
    width: 60px;
  }

  @media ${({ theme }) => theme.mobile} {
    margin: auto;
    font-size: 18px;

    img {
      width: 50px;
    }
  }
`;

export default Actbase;
