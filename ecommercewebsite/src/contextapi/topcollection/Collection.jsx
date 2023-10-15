import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./collection.css";
import topcollection from "./topcollection.jpg";
import "swiper/css/bundle"; // Import the full bundle of Swiper styles

function Collection() {
  return (
    <div className="topcollection">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3500,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={topcollection} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={topcollection} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={topcollection} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={topcollection} alt="img" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Collection;
