import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectCreative } from 'swiper'
import { flexLayout } from '@shared/styles/flex'
import { Tag } from '@features/career/common'
import PjLayout from '../common/PjLayout'
import { img1, img2, img3, img4, img5 } from './images/index'

const Portfolio = () => {
  return (
    <PjLayout
      title="포트폴리오 웹사이트"
      subTitle="2022-06-04 ~ 06-20 / FE: 1명"
    >
      <div
        className={`${flexLayout({
          justify: 'between',
          align: 'start',
        })} mt-[50px] max-[640px]:mt-[20px]`}
      >
        <div className="w-[450px] pr-[20px] text-text-333 text-[18px] leading-[1.5]">
          <p className="text=[18px] max-[640px]:text-[12px]">
            포트폴리오 용도로 제작한 웹사이트. <Tag>Vercel</Tag>을 이용하여 정적
            웹사이트의 Lean한 배포도 경험을 했던 프로젝트
          </p>
          <button
            type="button"
            onClick={() =>
              window.open(
                'https://aprilworld.notion.site/Nextjs-a0f61a06702542999db503406625b9a9'
              )
            }
            className="w-[120px] h-[40px] my-[10px] bg-compo-blue text-common-white text-[14px] rounded-[10px]"
          >
            자세히 보기
          </button>
          <ul className="mt-[20px] border-t-[1px] border-solid border-text-blue">
            <li className="my-[10px]">
              <strong className="inline-block w-[100px] font-[600]">
                주요 기능
              </strong>
              <p className="p-[5px] text-[16px] max-[640px]:w-[80vw] max-[640px]:text-[14px]">
                ✔︎ 간단한 자기소개, GitHub 및 기술블로그 소개, 기술 스택,
                프로젝트 경험, 업무 경력
              </p>
            </li>
            <li className="my-[10px]">
              <strong className="inline-block w-[100px] font-[600]">URL</strong>
              <p className="p-[5px] text-[16px] max-[640px]:w-[80vw] max-[640px]:text-[14px]">
                <Link
                  href={`https://april.dev`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-text-blue"
                >
                  april.dev
                </Link>
              </p>
            </li>
            <li className="my-[10px]">
              <strong className="inline-block w-[100px] font-[600]">
                Deployment
              </strong>
              <p className="p-[5px] text-[16px] max-[640px]:w-[80vw] max-[640px]:text-[14px]">
                Vercel
              </p>
            </li>
            <li className="my-[10px]">
              <strong className="inline-block w-[100px] font-[600]">
                GitHub
              </strong>
              <p className="p-[5px] text-[16px] max-[640px]:w-[80vw] max-[640px]:text-[14px]">
                <Link
                  href={`https://github.com/yurim45/practice`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-text-blue"
                >
                  github.com/yurim45/practice
                </Link>
              </p>
            </li>
            <li className="my-[10px]">
              <strong className="inline-block w-[100px] font-[600]">
                기술 스택
              </strong>
              <p className="p-[5px] text-[16px] max-[640px]:w-[80vw] max-[640px]:text-[14px]">
                {['Nextjs 13', 'React', 'Typescript', 'Styled-Components']?.map(
                  (item, i) => {
                    return <Tag key={i}>{`${item}`}</Tag>
                  }
                )}
              </p>
            </li>
          </ul>
        </div>
        <Swiper
          slidesPerView={'auto'} //초기값 설정 모바일값이 먼저!!
          spaceBetween={10}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          grabCursor={true}
          effect={'creative'}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ['100%', 0, 0],
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, EffectCreative]}
          className="w-[580px] max-[640px]:hidden"
        >
          {[img1, img2, img3, img4, img5]?.map((img, i) => {
            return (
              <SwiperSlide key={i}>
                <Image
                  alt="project preview"
                  src={img}
                  className="w-[100%] h-[100%]"
                />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </PjLayout>
  )
}

export default Portfolio
