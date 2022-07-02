import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import flex from '@shared/styles/flex';
import PjLayout from '../common/PjLayout';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCreative } from 'swiper';
import { img1, img2 } from './images/index';
import { tagText } from '@shared/styles/variables';

const EasyWorkApp = () => {
  return (
    <PjLayout
      title="Easy-Work App: 사내용 프로그램"
      subTitle="2022.06.28 ~ 계속 구현 중 / FE: 1명"
    >
      <StContent>
        <StLeftContent>
          <StContentDesc>
            <StTag>Vuejs</StTag> 를 배우면서 연습겸 사내용 프로그램을 제작한
            프로젝트. <br />
            일주일 정도 공부하며 <StTag>netlify</StTag>를 이용하여 배포 완료.
          </StContentDesc>
          <StReadMore
            type="button"
            onClick={() =>
              window.open(
                'https://www.notion.so/aprilworld/Vuejs-Easy-Work-App-f1eb7f0469184d24803cef76e6d1c410'
              )
            }
          >
            자세히 보기
          </StReadMore>
          <ul>
            <li>
              <strong>주요 기능</strong>
              <p>
                ✔︎ 사용자 페이지 <br />
                ㅤ● 포인트 사용 내역 확인 및 기록, 포인트 보내 <br />
                ㅤ● 휴가 등록 및 조회, 관리 등
                <br />
                ✔︎ 관리자 페이지 <br />
              </p>
            </li>

            <li>
              <strong>URL</strong>
              <p>
                <a
                  href={`https://easywork.today/`}
                  target="_blank"
                  rel="noreferrer"
                >
                  easywork.today
                </a>
              </p>
            </li>
            <li>
              <strong>Deployment</strong>
              <p>netlify</p>
            </li>
            <li>
              <strong>GitHub</strong>
              <p>
                <a
                  href={`https://github.com/yurim45/easy-work-app`}
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/yurim45/practice
                </a>
              </p>
            </li>

            <li>
              <strong>기술 스택</strong>
              <p>
                {['Vuejs', 'Javascript', 'Sass/Scss']?.map((item, i) => {
                  return <StTag key={i}>{`${item}`}</StTag>;
                })}
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
          {[img1, img2]?.map((img, i) => {
            return (
              <SwiperSlide key={i}>
                <Image
                  alt="project preview"
                  src={img}
                  width={270}
                  height={500}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </StContent>
    </PjLayout>
  );
};

export default EasyWorkApp;

const StContent = styled.div`
  margin-top: 50px;
  ${flex({ justify: 'between', align: 'start' })};

  .mySwiper {
    width: 300px;
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
