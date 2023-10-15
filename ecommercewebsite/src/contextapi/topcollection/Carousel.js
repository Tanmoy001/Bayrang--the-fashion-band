import React, { useState, useEffect } from 'react';

const Carousel = ({ slides, autoplayInterval }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    let intervalId;

    if (autoplayEnabled) {
      intervalId = setInterval(() => {
        nextSlide();
      }, autoplayInterval);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [autoplayEnabled]);

  return (
    <div className="carousel">
      <div className="slides-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === activeIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <h2>{slide.title}</h2>
            <p>{slide.description}</p>
          </div>
        ))}
      </div>
      <div className="pagination">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
      <div className="controls">
        <button onClick={prevSlide}>Previous</button>
        <button onClick={nextSlide}>Next</button>
      </div>
      <div className="autoplay-toggle">
        <label>
          Autoplay
          <input
            type="checkbox"
            checked={autoplayEnabled}
            onChange={(e) => setAutoplayEnabled(e.target.checked)}
          />
        </label>
      </div>
    </div>
  );
};

export default Carousel;
