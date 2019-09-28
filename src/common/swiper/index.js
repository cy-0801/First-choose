import React from 'react';
import Swiper from 'react-id-swiper';
import { Wrapper } from "./styled"

const SimpleSwiperWithParams = () => {
    const params = {
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        spaceBetween: 30
    }

    return (
        <Wrapper>
            <Swiper {...params}>
                <div><img src="https://p0.meituan.net/128.180/movie/4c01895cfd53e82f7c3048c407974a6b4739229.jpg" alt=""/></div>
                <div>Slide 2</div>
            </Swiper>
        </Wrapper>
    )
}

export default SimpleSwiperWithParams;