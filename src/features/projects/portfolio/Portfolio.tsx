import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import flex from '@shared/styles/flex'
import PjLayout from '../common/PjLayout'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectCreative } from 'swiper'
import { img1, img2, img3, img4, img5 } from './images/index'
import { Tag } from '@features/career/common'

const Portfolio = () => {
  return (
    <PjLayout
      title="포트폴리오 웹사이트"
      subTitle="2022-06-04 ~ 06-20 / FE: 1명"
    >
      <StContent>
        <StLeftContent>
          <StContentDesc>
            포트폴리오 용도로 제작한 웹사이트. <Tag>Vercel</Tag>을 이용하여 정적
            웹사이트의 Lean한 배포도 경험을 했던 프로젝트
          </StContentDesc>
          <StReadMore
            type="button"
            onClick={() =>
              window.open(
                'https://aprilworld.notion.site/Nextjs-a0f61a06702542999db503406625b9a9'
              )
            }
          >
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
                <Link
                  href={`https://april.dev`}
                  target="_blank"
                  rel="noreferrer"
                >
                  april.dev
                </Link>
              </p>
            </li>
            <li>
              <strong>Deployment</strong>
              <p>Vercel</p>
            </li>
            <li>
              <strong>GitHub</strong>
              <p>
                <Link
                  href={`https://github.com/yurim45/practice`}
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/yurim45/practice
                </Link>
              </p>
            </li>

            <li>
              <strong>기술 스택</strong>
              <p>
                {['Nextjs 13', 'React', 'Typescript', 'Styled-Components']?.map(
                  (item, i) => {
                    return <Tag key={i}>{`${item}`}</Tag>
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
          {[img1, img2, img3, img4, img5]?.map((img, i) => {
            return (
              <SwiperSlide key={i}>
                <Image
                  alt="project preview"
                  src={img}
                  className="w-[530px] h-[470px]"
                />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </StContent>
    </PjLayout>
  )
}

const StContent = styled.div`
  margin-top: 50px;
  ${flex({ justify: 'between', align: 'start' })};

  .mySwiper {
    width: 550px;
  }

  @media ${({ theme }) => theme.mobile} {
    margin-top: 20px;

    .mySwiper {
      display: none;
    }
  }
`

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

      p {
        font-size: 14px;
      }
    }
  }
`

const StContentDesc = styled.p`
  font-size: 18px;

  @media ${({ theme }) => theme.mobile} {
    font-size: 12px;
  }
`

const StReadMore = styled.button`
  width: 120px;
  height: 40px;
  margin: 10px 0;
  background: var(--compo-blue);
  color: var(--white);
  font-size: 14px;
  border-radius: 10px;
`

export default Portfolio
