import React from 'react';
import './Hero.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import { assets } from '../../../assets/assets';


const Hero = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide><img src={assets.hero_b1} alt="Hitech-Files1" />
        
        </SwiperSlide>
        <SwiperSlide><img src={assets.HeroBanner2} alt="Hitech-Files2" /></SwiperSlide>
        {/* <SwiperSlide><img src={assets.hero_b3} alt="Hitech-Files3" /></SwiperSlide> */}
        <SwiperSlide><img src={assets.HeroBanner4} alt="Hitech-Files4" /></SwiperSlide>
        <SwiperSlide><img src={assets.HeroBanner3} alt="Hitech-Files1 repeat" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
