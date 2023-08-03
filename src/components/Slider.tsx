import React, { ReactNode } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Pagination, Navigation } from 'swiper'

type SliderProps = {
  children: ReactNode[]
}

const Slider = ({ children }: SliderProps) => {
  return (
    <>
      <Swiper
        slidesPerView={'auto'} //초기값 설정 모바일값이 먼저!!
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 15000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          // renderBullet: function (index, className) {
          //   return '<span class="' + className + '">' + (index + 1) + '</span>';
          // },
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1000: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {children?.map((item, i) => {
          return <SwiperSlide key={i}>{item}</SwiperSlide>
        })}
      </Swiper>
    </>
  )
}

export default Slider
