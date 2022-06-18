import React, { useEffect, useState, useRef, ReactNode } from 'react';
import styled from 'styled-components';
import flex from '@shared/styles/flex';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

type SliderProps = {
  children: ReactNode[];
};

const Slider = ({ children }: SliderProps) => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {children?.map((item, i) => {
          return <SwiperSlide key={i}>{item}</SwiperSlide>;
        })}
      </Swiper>
    </>
  );
};

export default Slider;
