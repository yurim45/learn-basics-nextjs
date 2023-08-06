import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectCreative } from 'swiper'
import { flexLayout } from '@shared/styles/flex'
import { Tag } from '@features/career/common'
import PjLayout from '../common/PjLayout'
import { img1, img2, img3, img4 } from './images/index'
import { URL_ATTENDANCE } from '../variables'

const Attendance = () => {
  return (
    <PjLayout
      title="근태관리 프로그램"
      subTitle="2021-06-07 ~ 07-01 / FE: 2명, BE: 1명"
    >
      <div
        className={`${flexLayout({
          justify: 'between',
          align: 'start',
        })} mt-[50px] max-[640px]:mt-[20px]`}
      >
        <div className="w-[450px] pr-[20px] text-text-333 text-[18px] leading-[1.5]">
          <p className="text=[18px] max-[640px]:text-[12px]">
            근태 등록, 근무제 선택 및 신청, 연차 등 휴가 관리 등의
            <br /> 근태관리 프로그램 개발 프로젝트
          </p>
          <button
            type="button"
            onClick={() => window.open(URL_ATTENDANCE)}
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
                ✔︎ 사용자페이지, 마이페이지, 관리자페이지로 구성.
                <br />
                ✔︎ 각 권한별 페이지 진입 및 관리 가능. <br />
                ㅤ● 기본 근태 입력 및 조회 <br />
                ㅤ● 휴가 신청 및 근무제 신청 및 조회
                <br />
                ㅤ● 근로시간 및 초과근무, 출•퇴근 시간 시각화 <br />
                ㅤ● 출•퇴근 기록 조회 및 검색 기능
              </p>
            </li>
            <li className="my-[10px]">
              <strong className="inline-block w-[100px] font-[600]">
                GitHub
              </strong>
              <p className="p-[5px] text-[16px] max-[640px]:w-[80vw] max-[640px]:text-[14px]">
                <Link
                  href={`https://github.com/yurim45/b2tech-intern-20-front`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-text-blue"
                >
                  github.com/yurim45/b2tech-intern-20-front
                </Link>
              </p>
            </li>
            <li className="my-[10px]">
              <strong className="inline-block w-[100px] font-[600]">
                기술 스택
              </strong>
              <p className="p-[5px] text-[16px] max-[640px]:w-[80vw] max-[640px]:text-[14px]">
                {['React', 'Javascript', 'Styled-Components', 'HTML']?.map(
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
          className="w-[550px] max-[640px]:hidden"
        >
          {[img1, img2, img3, img4]?.map((img, i) => {
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

export default Attendance
