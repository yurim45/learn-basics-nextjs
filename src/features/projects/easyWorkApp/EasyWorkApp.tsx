import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectCreative } from 'swiper'
import { flexLayout } from '@shared/styles/flex'
import { Tag } from '@features/career/common'
import PjLayout from '../common/PjLayout'
import { img1, img2, img3, img4 } from './images/index'
import { URL_EASYWORK } from '../variables'

const EasyWorkApp = () => {
  return (
    <PjLayout
      title="Easy-Work App: 사내용 프로그램"
      subTitle="2022.08.09 ~ 10.11, 약 2개월간 | 총 3명 (UX/UI디자이너 1명, Frontend 1명, Backend 1명)"
    >
      <div
        className={`${flexLayout({
          justify: 'between',
          align: 'start',
        })} mt-[50px] max-[640px]:mt-[20px]`}
      >
        <div className="w-[450px] pr-[20px] text-text-333 text-[18px] leading-[1.5]">
          <p className="text=[18px] max-[640px]:text-[12px]">
            <Tag>Vuejs</Tag> 를 배우면서 <Tag>PWA</Tag>를 적용한 사내용
            프로그램을 제작한 프로젝트. <br />
          </p>
          <button
            type="button"
            onClick={() => window.open(URL_EASYWORK)}
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
                ✔︎ 권한별 페이지 구성(사용자, 관리자) <br />
                ✔︎ 복지 포인트 기능 <br />
                ✔︎ 휴가 등록 및 조회, 관리 등 ✔︎ 구매 요청 및 승인, 알림 등
              </p>
            </li>
            <li className="my-[10px]">
              <strong className="inline-block w-[100px] font-[600]">URL</strong>
              <p className="p-[5px] text-[16px] max-[640px]:w-[80vw] max-[640px]:text-[14px]">
                <Link
                  href={`https://atnpeasywork.link`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-text-blue"
                >
                  easywork.today
                </Link>
              </p>
            </li>
            <li className="my-[10px]">
              <strong className="inline-block w-[100px] font-[600]">
                회고
              </strong>
              <p className="p-[5px] text-[16px] max-[640px]:w-[80vw] max-[640px]:text-[14px]">
                <Link
                  href={`https://velog.io/@april_5/%EC%82%AC%EC%9D%B4%EB%93%9C-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EB%A7%88%EB%AC%B4%EB%A6%AC%EB%A5%BC-%EC%95%9E%EB%91%90%EA%B3%A0`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-text-blue"
                >
                  회고록
                </Link>
              </p>
            </li>
            <li className="my-[10px]">
              <strong className="inline-block w-[100px] font-[600]">
                GitHub
              </strong>
              <p className="p-[5px] text-[16px] max-[640px]:w-[80vw] max-[640px]:text-[14px]">
                <Link
                  href={`https://github.com/yurim45/easy-work-app`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-text-blue"
                >
                  github.com/yurim45/easy-work-app
                </Link>
              </p>
            </li>
            <li className="my-[10px]">
              <strong className="inline-block w-[100px] font-[600]">
                기술 스택
              </strong>
              <p className="p-[5px] text-[16px] max-[640px]:w-[80vw] max-[640px]:text-[14px]">
                {['vuejs', 'JS', 'apollo', 'graphql', 'sass']?.map(
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
          className="w-[300px] max-[640px]:hidden"
        >
          {[img1, img2, img3, img4]?.map((img, i) => {
            return (
              <SwiperSlide key={i}>
                <Image alt="project preview" src={img} className="w-[90%]" />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </PjLayout>
  )
}

export default EasyWorkApp
