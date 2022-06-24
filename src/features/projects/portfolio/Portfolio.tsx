import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import flex from '@shared/styles/flex';
import PjLayout from '../common/PjLayout';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCreative } from 'swiper';
import { img1, img2, img3, img4, img5 } from './images/index';
import { tagText } from '@shared/styles/variables';

const Portfolio = () => {
  return (
    <PjLayout
      title="포트폴리오 웹사이트"
      subTitle="2022-06-04 ~ 06-20 / FE: 1명"
    >
      <StContent>
        <StLeftContent>
          <StContentDesc>
            포트폴리오 용도로 제작한 웹사이트. Vercel을 이용하여 정적 웹사이트의
            Lean한 배포도 경험을 했던 프로젝트
          </StContentDesc>
          <StReadMore type="button" onClick={() => window.open('')}>
            자세히 보기
          </StReadMore>
          <ul>
            <li>
              <strong>주요 기능</strong>
              <p>
                ✔︎ 간단한 자기소개, GitHub 및 기술블로그 소개, 기술 스택,
                프로젝트 경험, 업무 경력
              </p>
            </li>

            <li>
              <strong>URL</strong>
              <p>
                <a
                  href={`https://april.world`}
                  target="_blank"
                  rel="noreferrer"
                >
                  april.world
                </a>
              </p>
            </li>
            <li>
              <strong>Deployment</strong>
              <p>Vercel</p>
            </li>
            <li>
              <strong>GitHub</strong>
              <p>
                <a
                  href={`https://github.com/yurim45/practice`}
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
                {['Nextjs', 'React', 'Typescript', 'Styled-Components']?.map(
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
          modules={[Pagination, EffectCreative]}
          className="mySwiper"
        >
          {[img1, img2, img3, img4, img5]?.map((img, i) => {
            return (
              <SwiperSlide key={i}>
                <Image
                  alt="project preview"
                  src={img}
                  width={530}
                  height={470}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </StContent>
    </PjLayout>
  );
};

export default Portfolio;

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
