import React, { useState, useEffect } from 'react';
import './slider.css';
import pic1 from './assets/images/img_1.jpg'

import pic2 from './assets/images/img_2.jpg'
import pic3 from './assets/images/img_3.jpg'
import pic4 from './assets/images/img_4.jpg'
const Slider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const [tempStyle, setTempStyle] = useState(null);
  const images=[
    pic1,pic2,pic3,pic4
  ]
  useEffect(() => {
    const intervalId = setInterval(() => {
  
      
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    
     

    }, 10000);

    return () => clearInterval(intervalId);
  }, [currentImageIndex, images]);

  const applyTemporaryStyle = () => {
    setTempStyle({ paddingLeft: '1%' ,paddingRight:'1%',
    transition: 'background-color 0.3s ease-in-out' }); // Set the temporary style here
    setTimeout(() => {
      setTempStyle(null); // Revert the style back to its original value
    }, 500);
  } 

  const handlePrevClick = () => {
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
  };
  const first = ()=>{
    handlePrevClick();
     applyTemporaryStyle(); 
  }

  const handleNextClick = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };
  const second =()=>{
    handleNextClick();
     applyTemporaryStyle(); 
  }

  return (
    <div className='Slider'>
    <div className="slider-container">
      <div className="slider-navigation">
        <button className="slider-button prev" onClick={first}>
          &lt;
        </button>
        <button className="slider-button next" onClick={second}>
          &gt;
        </button>
      </div>
      <div className="slider-pagination">
        {images.map((_, index) => (
          <button
            key={index}
            className={`slider-page ${
              index === currentImageIndex ? 'active' : ''
            }`}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
      <div className="slider-images">
        {images.map((image, index) => (
          
          <img
          style={tempStyle}
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={`slider-image ${
              
              index === currentImageIndex ? 'active' : ''
              
            }`}
         />
         
        ))}
      </div>
    </div>
    </div>
  );
};

export default Slider
