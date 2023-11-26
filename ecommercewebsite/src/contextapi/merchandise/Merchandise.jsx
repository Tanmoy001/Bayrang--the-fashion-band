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

import "./merchandise.css";

// import required modules
import {  Navigation } from "swiper";
function Merchandise() {
  const [swiperRef, setSwiperRef] = useState(null);

 

  return (
 <div className='merchandise'>
      <div className='title'>
        <h3>मरCHANDISE</h3>
      </div>
    <div className="slidermerchandise">
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={4}
      /*   centeredSlides={true} */
        spaceBetween={20}
        breakpoints={{
          // when window width is >= 640px
          200:{
            width:200,
            slidesPerView: 1,
          },
          500:{
            width:500,
            slidesPerView: 1.2,
          },
          600: {
            width: 640,
            slidesPerView: 1.5,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 2,
          },
        }}
        navigation={true}
        modules={[ Navigation]}
        className="mySwiper"
      >
         <SwiperSlide> <img src={pic1} alt="slide_image"/></SwiperSlide>
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
</div>
  );
}


export default Merchandise
