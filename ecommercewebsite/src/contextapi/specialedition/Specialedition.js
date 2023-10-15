/* import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./specialedition.css";


import pic1 from './images/img_1.jpg'
import pic2 from './images/img_2.jpg'
import pic3 from './images/img_3.jpg'
import pic4 from './images/img_4.jpg'
import pic5 from './images/img_5.jpg'

import pic6 from './images/img_6.jpg'
import pic7 from './images/img_7.jpg'
// import required modules
import {Navigation, Pagination } from "swiper";

export default function Specialedition() {
    const handleNextClick = () => {
      };
  return (
    <>
      <Swiper
        slidesPerView={5.5}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide> <img src={pic1} alt="slide_image" /></SwiperSlide>
        <SwiperSlide> <img src={pic2} alt="slide_image" /></SwiperSlide>
        <SwiperSlide> <img src={pic3} alt="slide_image" /></SwiperSlide>
        <SwiperSlide> <img src={pic4} alt="slide_image" /></SwiperSlide>
        <SwiperSlide> <img src={pic5} alt="slide_image" /></SwiperSlide>
        <SwiperSlide> <img src={pic6} alt="slide_image" /></SwiperSlide>
        <SwiperSlide> <img src={pic7} alt="slide_image" /></SwiperSlide>
      </Swiper>
     
    </>
  );
}
 */

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import pic1 from './images/img_1.jpg'
import pic2 from './images/img_2.jpg'
import pic3 from './images/img_3.jpg'
import pic4 from './images/img_4.jpg'
import pic5 from './images/img_5.jpg'

import pic6 from './images/img_6.jpg'
import pic7 from './images/img_7.jpg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./specialedition.css";

// import required modules
import {  Navigation } from "swiper";

export default function Specialedition() {
  const [swiperRef, setSwiperRef] = useState(null);

 

  return (
    <div className="specedition">
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={4}
      /*   centeredSlides={true} */
        spaceBetween={20}
        breakpoints={{
          // when window width is >= 640px
          100: {
            slidesPerView: 1,
          },
          340: {
            slidesPerView: 2,
            spaceBetween: 4
          },
          440: {
            slidesPerView: 2.2,
            spaceBetween: 5
          },
          560: {
            slidesPerView: 2.5,
            spaceBetween: 9
          },
          768: {
            slidesPerView: 3.5,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 4.5,
            spaceBetween: 30
          }
        }}
        navigation={true}
        modules={[ Navigation]}
        className="mySwiper"
      >
         <SwiperSlide> <img src={pic1} alt="slide_image" /></SwiperSlide>
        <SwiperSlide> <img src={pic2} alt="slide_image" /></SwiperSlide>
        <SwiperSlide> <img src={pic3} alt="slide_image" /></SwiperSlide>
        <SwiperSlide> <img src={pic4} alt="slide_image" /></SwiperSlide>
        <SwiperSlide> <img src={pic5} alt="slide_image" /></SwiperSlide>
        <SwiperSlide> <img src={pic6} alt="slide_image" /></SwiperSlide>
        <SwiperSlide> <img src={pic7} alt="slide_image" /></SwiperSlide>
      </Swiper>
     {/*  <p className="append-buttons">
        <button onClick={() => prepend2()} className="prepend-2-slides">
          Prepend 2 Slides
        </button>
        <button onClick={() => prepend()} className="prepend-slide">
          Prepend Slide
        </button>
        <button onClick={() => append()} className="append-slide">
          Append Slide
        </button>
        <button onClick={() => append2()} className="append-2-slides">
          Append 2 Slides
        </button>
      </p> */}
    </div>
  );
}
