'use client'

import React from 'react'
import Image from 'next/image'
import { flexLayout } from 'app/_shared/styles/flex'
import { actbase, ICOOQQA, appsotre } from '@images/career/index'
import { CareerLayout, Role, Tag } from '../common'

const Actbase = () => {
  return (
    <CareerLayout logo={actbase} company="actbase" period="JUL 2021 ~ JAN 2022">
      <div>
        <Role>
          유아 재능 발견 플랫폼 서비스를 제공하는 아이쿠카 APP의 유지 보수 담당
        </Role>
        <Image
          alt="logo"
          src={ICOOQQA}
          className="w-[800px] h-[600px] max-[640px]:w-[100%] max-[640px]:h-[300px]"
        />
        <ul className="my-[20px] text-[18px] max-[640px]:text-[16px]">
          <li className="text-text-555 leading-[1.8]">
            <strong>✔️ 기간</strong>: 2021. 8.26 ~ 12.31{' '}
          </li>
          <li className="text-text-555 leading-[1.8]">
            <strong>✔️ Skills </strong>:{' '}
            {['React-native', 'Javascript', 'CSS3'].map((item, i) => (
              <Tag key={i}>{item}</Tag>
            ))}
          </li>
          <li className="text-text-555 leading-[1.8]">
            <strong>✔️ 담당 역할</strong>: 앱 유지 보수
            <ul>
              <li>■ AppStore 앱 심사 준비 및 승인 </li>
              <li>ㅤ• IAP test: storeKit 생성 및 테스트 </li>
              <li>ㅤ• 앱 심사 준비 및 승인 </li>
              <li>■ UIUX 개선 </li>
              <li>ㅤ• class 영역 UIUX 개선 </li>
              <li>■ 기타/수정/오류 </li>
              <li>ㅤ• FBsdk: ios 설치 및 딥링크 생성 </li>
              <li>ㅤ• Google Analytics: logPurchase() 구현</li>
              <li>ㅤ• 그 외 오류 사항 수정 등</li>
            </ul>
          </li>
        </ul>
        <button
          type="button"
          onClick={() =>
            window.open(
              'https://apps.apple.com/kr/app/%EC%95%84%EC%9D%B4%EC%BF%A0%EC%B9%B4/id1500709264'
            )
          }
          className={`${flexLayout(
            {}
          )} py-[15px] px-[30px] bg-common-lightGray text-[18px] rounded-[10px]`}
        >
          <Image alt="app store logo" src={appsotre} width={50} />
          <span className="ml-[24px] text-text-777 underline">
            App Store Link
          </span>
        </button>
      </div>
    </CareerLayout>
  )
}

export default Actbase
