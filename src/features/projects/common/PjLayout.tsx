import React, { ReactNode } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import flex from '@shared/styles/flex';
import { pjTitle, pjDesc, formSet } from '@shared/styles/variables';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination } from 'swiper';
import Link from 'next/link';

type PjLayoutProps = {
  title: string;
  subTitle: string;
  images: any[];
  desc: string;
  feat: string;
  GitHubAdd: string;
  tech: string[];
  url?: string;
  deployment?: string;
};
const PjLayout = ({
  title,
  subTitle,
  images,
  desc,
  feat,
  GitHubAdd,
  tech,
  url,
  deployment,
}: PjLayoutProps) => {
  return (
    <StContainer>
      <StTitle>{title}</StTitle>
      <StDesc>{subTitle}</StDesc>
      <StContent>
        <StLeftContent>
          <StContentDesc>{desc}</StContentDesc>
          <ul>
            <li>
              <strong>주요 기능</strong>
              <p
                dangerouslySetInnerHTML={{
                  __html: feat,
                }}
              />
            </li>
            <li>
              <strong>GitHub</strong>
              <p>
                <a
                  href={`https://${GitHubAdd}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {GitHubAdd}
                </a>
              </p>
            </li>
            {url && (
              <li>
                <strong>URL</strong>
                <p>
                  <a href={url} target="_blank" rel="noreferrer">
                    {url}
                  </a>
                </p>
              </li>
            )}
            <li>
              <strong>기술 스택</strong>
              <p>
                {tech?.map((item, i) => {
                  return <span key={i}>{`${item} ▪ `}</span>;
                })}
              </p>
            </li>
            {deployment && (
              <li>
                <strong>Deployment</strong>
                <p>{deployment}</p>
              </li>
            )}
          </ul>
        </StLeftContent>
        <Swiper
          slidesPerView={'auto'} //초기값 설정 모바일값이 먼저!!
          spaceBetween={10}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {images?.map((img, i) => {
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
    </StContainer>
  );
};

export default PjLayout;

const StContainer = styled.div`
  ${formSet()};
  margin: 0 40px;
  width: 1060px;
  height: 800px;

  :hover {
    transform: none;
  }

  @media ${({ theme }) => theme.mobile} {
    width: 300px;
  }
`;

const StTitle = styled.h2`
  ${pjTitle()};
`;

const StDesc = styled.p`
  ${pjDesc()};
`;

const StContent = styled.div`
  margin-top: 50px;
  ${flex({ justify: 'between', align: 'start' })};

  .mySwiper {
    width: 550px;
  }

  @media ${({ theme }) => theme.mobile} {
    ${flex({ direction: 'col' })};
  }
`;

const StLeftContent = styled.div`
  width: 450px;
  padding-right: 20px;
  color: var(--text-333);
  font-size: 18px;
  line-height: 1.5;

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
  }
`;

const StContentDesc = styled.p`
  font-size: 18px;
`;
