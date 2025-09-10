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
    <div className="hero-container">
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
        <SwiperSlide>
          <div className="slide">
            <img src={assets.hero_b1} alt="Hitech-Files1" />
            <div className="slide-text">Welcome to Hitech Files
              <p>Your One-Stop Solution for All Your Document Needs</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide">
            <img src={assets.HeroBanner2} alt="Hitech-Files2" />
            <div className="slide-text">Your Documents, Simplified
              <p>Your One-Stop Solution for All Your Document Needs</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide">
            <img src={assets.HeroBanner4} alt="Hitech-Files4" />
            <div className="slide-text">Secure. Fast. Reliable.
              <p>Your One-Stop Solution for All Your Document Needs</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide">
            <img src={assets.HeroBanner3} alt="Hitech-Files3" />
            <div className="slide-text">Try Hitech Files Today
              <p>Your One-Stop Solution for All Your Document Needs</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
