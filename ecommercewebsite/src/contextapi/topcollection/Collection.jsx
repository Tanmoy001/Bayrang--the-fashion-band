import React,{useState,useEffect} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./collection.css";
import topcollection from "./topcollection.jpg";
import "swiper/css/bundle"; // Import the full bundle of Swiper styles
import { useNavigate } from 'react-router-dom';
function Collection() {
  const navigate = useNavigate()
  const [showImagetwo, setShowImagetwo] = useState(false);
  const [showImagethree, setShowImagethree] = useState(false);
  
  const [showImagefour, setShowImagefour] = useState(false);

  const toggleImagetwo = () => {

    setTimeout(() => {
      setShowImagetwo(true);
    }, 200); // 1000 milliseconds = 1 second
  };
  const toggleImagethree = () => {
    
    setTimeout(() => {
      setShowImagethree(true);
    }, 400); // 1000 milliseconds = 1 second
  };
  const toggleImagefour = () => {

    setTimeout(() => {
      setShowImagefour(true);
      
    }, 600); // 1000 milliseconds = 1 second
  };
  const rout_one=()=>{
    navigate('/collections');
  }
  useEffect(()=>{
    toggleImagetwo()
    toggleImagethree()
    toggleImagefour()
    
  })

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
          
        <img src={topcollection} alt="" onClick={() => rout_one()} />
        </SwiperSlide>
        <SwiperSlide>
        {showImagetwo ? (
        <img src={topcollection}  alt="" onClick={() => rout_one()} />
      ) : (
        <div style={{  backgroundColor: 'white' }} />
      )}
        </SwiperSlide>
        <SwiperSlide>
        {showImagethree ? (
        <img src={topcollection} alt="" onClick={() => rout_one()} />
      ) : (
        <div style={{  backgroundColor: 'white' }} />
      )}
        </SwiperSlide>
        <SwiperSlide>
        {showImagefour ? (
        <img src={topcollection}  alt=""onClick={() => rout_one()} />
      ) : (
        <div style={{  backgroundColor: 'white' }} />
      )}
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Collection;
