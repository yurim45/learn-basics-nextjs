import React from 'react'
import Link from 'next/link'
import { thingsflow } from '@images/career/index'
import { CareerLayout, Role, Tag } from '../common'

const Thingsflow = () => {
  return (
    <CareerLayout
      logo={thingsflow}
      company="Thingsflow"
      period="JAN 2023 ~ 현재"
    >
      {/* 헬로우봇 */}
      <div>
        <Role>
          <strong className="inline-block px-[5px] bg-yellow-100 text-[20px] font-[600] leading-[1.5] max-[640px]:text-[18px]">
            🟡 헬로우봇 🟡
          </strong>
          <Link
            href={'https://hellobot.co'}
            target="_blank"
            rel="noreferrer"
            className="text-text-blue"
          >
            {' '}
            웹
          </Link>
          /
          <Link
            href={'https://hellobotstudio.com/login'}
            target="_blank"
            rel="noreferrer"
            className="text-text-blue"
          >
            스튜디오
          </Link>{' '}
          기능 개발 및 유지 보수
        </Role>
        <iframe
          src="https://hellobot.co"
          width={600}
          height={450}
          className="max-[640px]:w-[100%] max-[640px]:h-[350px]"
        />
        <ul className="my-[20px] text-[18px] max-[640px]:text-[16px]">
          <li className="text-text-555 leading-[1.8]">
            <strong>✔️ 기간</strong>: 2023. 10.19 ~ 현재
          </li>
          <li className="text-text-555 leading-[1.8]">
            <strong>✔️ Skills </strong>:
            {[
              'Nextjs14',
              'Angular13',
              'Typescript',
              'rxjs',
              'RestAPI',
              'scss',
              'tailwind',
            ].map((item, i) => (
              <Tag key={i}>{item}</Tag>
            ))}
          </li>
          <li className="text-text-555 leading-[1.8]">
            <strong>✔️ 담당 역할</strong>
            <ul className="my-[5px] pl-[20px]">
              <li>
                ■ AI 반려동물 프로필{' '}
                <Link
                  href={`https://hellomy.ai/`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-text-blue"
                >
                  https://hellomy.ai/
                </Link>
              </li>
              <ul className="ml-[15px]">
                <li>
                  ㄴ{' '}
                  <Link
                    href={`https://velog.io/@april_5/Nextjs14-%EB%8B%A4%EA%B5%AD%EC%96%B4-%EC%A7%80%EC%9B%90%ED%95%98%EA%B8%B0feat.next-international`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-text-blue"
                  >
                    👆 Nextjs14 다국어 지원
                  </Link>
                </li>
                <li>ㄴ 토스페이먼츠 연동(국내/외)</li>
              </ul>

              <li>■ AI 궁합도 기능 개발</li>
              <li>■ 구독결제 개발</li>
              <li>■ angular9 → angular13 version update</li>
              <li>■ 마이크로 프론트엔드 적용</li>
            </ul>
          </li>
        </ul>
      </div>

      <div
        className={`w-4/5 mt-[50px] mb-[20px] ml-0 border-b-[2px] border-dotted max-[640px]:w-full`}
      />
      {/* 스플 */}
      <div>
        <Role>
          <strong className="inline-block px-[5px] bg-purple-100 text-[20px] font-[600] leading-[1.5] max-[640px]:text-[18px]">
            {' '}
            🟣 스토리플레이 🟣
          </strong>
          <Link
            href={'https://www.storyplay.com'}
            target="_blank"
            rel="noreferrer"
            className="text-text-blue"
          >
            {' '}
            웹
          </Link>
          /
          <Link
            href={'https://studio.storyplay.com'}
            target="_blank"
            rel="noreferrer"
            className="text-text-blue"
          >
            스튜디오
          </Link>{' '}
          기능 개발 및 유지 보수
        </Role>
        <iframe
          src="https://storyplay.com"
          width={600}
          height={450}
          className="max-[640px]:w-[100%] max-[640px]:h-[350px]"
        />
        <ul className="my-[20px] text-[18px] max-[640px]:text-[16px]">
          <li className="text-text-555 leading-[1.8]">
            <strong>✔️ 기간</strong>: 2023.1.2 ~ 2023.12.31
          </li>
          <li className="text-text-555 leading-[1.8]">
            <strong>✔️ Skills </strong>:
            {[
              'Nextjs',
              'React',
              'Typescript',
              'Apollo GraphQL',
              'Redux-toolkit',
              '@emotion/styled',
            ].map((item, i) => (
              <Tag key={i}>{item}</Tag>
            ))}
          </li>
          <li className="text-text-555 leading-[1.8]">
            <strong>✔️ 담당 역할</strong>
            <ul className="my-[5px] pl-[20px]">
              <li>■ 본인인증 웹뷰 API 구현</li>
              <li>■ 글로벌 작업</li>
              <li>
                ■{' '}
                <Link
                  href={`https://velog.io/@april_5/%ED%86%A0%EC%8A%A4%ED%8E%98%EC%9D%B4%EB%A8%BC%EC%B8%A0-%EA%B2%B0%EC%A0%9C-%EC%9C%84%EC%A0%AF-%EC%97%B0%EB%8F%99%ED%95%98%EA%B8%B0`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-text-blue"
                >
                  👆 토스페이먼츠 연동(국내/외)
                </Link>
              </li>
              <li>
                ■{' '}
                <Link
                  href={`https://velog.io/@april_5/%ED%98%84%EC%97%85%EC%97%90%EC%84%9C-%EA%B2%AA%EC%97%88%EB%8D%98-%ED%81%AC%EB%A1%9C%EC%8A%A4-%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A7%95-%EC%9D%B4%EC%95%BC%EA%B8%B0`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-text-blue"
                >
                  👆 크로스 브라우징 이야기
                </Link>
              </li>
              <li>
                ■{' '}
                <Link
                  href={`https://velog.io/@april_5/%EC%9B%B9%EB%B7%B0-%ED%86%B5%EC%8B%A0-React-%EB%84%A4%EC%9D%B4%ED%8B%B0%EB%B8%8C-%EC%95%B1-React-React-%ED%86%B5%EC%8B%A0%ED%95%98%EA%B8%B0`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-text-blue"
                >
                  {`👆 웹소설 > epub file viewer 개발 및 웹뷰 연동`}
                </Link>
              </li>
              <li>
                ■{' '}
                <Link
                  href={`https://velog.io/@april_5/%EC%8B%A4%EC%8A%B5-%EC%9B%B9-%EC%84%B1%EB%8A%A5-%EC%B5%9C%EC%A0%81%ED%99%94-%EC%8B%A4%EC%8A%B5%ED%95%98%EA%B8%B0`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-text-blue"
                >
                  👆 LightHouse를 활용한 성능 최적화
                </Link>
              </li>
              <li>■ Sentry 설정</li>
            </ul>
          </li>
        </ul>
      </div>
    </CareerLayout>
  )
}

export default Thingsflow
