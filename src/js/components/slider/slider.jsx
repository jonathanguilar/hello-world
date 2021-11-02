import React, { Children } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Scrollbar, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

SwiperCore.use([Navigation, Scrollbar]);

const swiperBreakpoints = {
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        1248: {
          slidesPerView: 3,
          spaceBetween: 10
        },
}

const Slider = ({ children }) => {
    return (
        <div className='slider-wrapper relative'>
            <Swiper
                direction='horizontal'
                slidesPerGroupAuto={true}
                slidesPerGroup={1}
                slidesPerView={'auto'}
                scrollbar={true}
                breakpoints={swiperBreakpoints}
                navigation={{
                    prevEl: '.caret-left',
                    nextEl: '.caret-right'
                }}
            >
                {
                    Children.map(children, (panel, key) => (
                        <SwiperSlide key={panel} virtualIndex={key}>
                            { panel }
                        </SwiperSlide>
                    ))
                }
            </Swiper>

            <button className='caret-left absolute top-1/3 mt-5 -left-12 z-50'></button>

            <button className='caret-right absolute top-1/3 mt-5 -right-10 z-50'></button>
        </div>
    )
}

export default Slider;
