import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import flex from '@shared/styles/flex';
import PjLayout from '../common/PjLayout';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCreative } from 'swiper';
import { img1, img2, img3, img4 } from './images/index';
import { tagText } from '@shared/styles/variables';

const Attendance = () => {
  return (
    <PjLayout
      title="근태관리 프로그램"
      subTitle="2021-06-07 ~ 07-01 / FE: 2명, BE: 1명"
    >
      <StContent>
        <StLeftContent>
          <StContentDesc>
            근태 등록, 근무제 선택 및 신청, 연차 등 휴가 관리 등의
            <br /> 근태관리 프로그램 개발 프로젝트
          </StContentDesc>
          <StReadMore
            type="button"
            onClick={() =>
              window.open(
                'https://aprilworld.notion.site/React-Internship_-Project-de31dddabe1745be863a06734c036c0c'
              )
            }
          >
            자세히 보기
          </StReadMore>
          <ul>
            <li>
              <strong>주요 기능</strong>
              <p>
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
            <li>
              <strong>GitHub</strong>
              <p>
                <Link
                  href={`https://github.com/yurim45/b2tech-intern-20-front`}
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/yurim45/b2tech-intern-20-front
                </Link>
              </p>
            </li>
            <li>
              <strong>기술 스택</strong>
              <p>
                {['React', 'Javascript', 'Styled-Components', 'HTML']?.map(
                  (item, i) => {
                    return <StTag key={i}>{`${item}`}</StTag>;
                  }
                )}
              </p>
            </li>
          </ul>
        </StLeftContent>
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
          className="mySwiper"
        >
          {[img1, img2, img3, img4]?.map((img, i) => {
            return (
              <SwiperSlide key={i}>
                <Image
                  alt="project preview"
                  src={img}
                  width={535}
                  height={350}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </StContent>
    </PjLayout>
  );
};

const StContent = styled.div`
  margin-top: 50px;
  ${flex({ justify: 'between', align: 'start' })};

  .mySwiper {
    width: 550px;
  }

  @media ${({ theme }) => theme.mobile} {
    display: block;
    margin-top: 20px;
    overflow: scroll;
    word-break: break-all;
  }
`;

const StLeftContent = styled.div`
  width: 450px;
  padding-right: 20px;
  color: var(--text-333);
  font-size: 18px;
  line-height: 1.5;

  ul {
    margin-top: 20px;
    border-top: 1px solid var(--text-blue);
  }

  li:first-child {
    margin-top: 20px;
  }

  li {
    margin: 10px 0;
  }

  strong {
    display: inline-block;
    width: 100px;
    font-weight: 600;
  }

  p {
    padding: 5px;
    font-size: 16px;

    @media ${({ theme }) => theme.mobile} {
      width: 80vw;
      font-size: 14px;
    }
  }
`;

const StContentDesc = styled.p`
  font-size: 18px;

  @media ${({ theme }) => theme.mobile} {
    font-size: 12px;
  }
`;

const StReadMore = styled.button`
  width: 120px;
  height: 40px;
  margin: 10px 0;
  background: var(--compo-blue);
  color: var(--white);
  font-size: 14px;
  border-radius: 10px;
`;

const StTag = styled.span`
  ${tagText()};
`;

export default Attendance;
