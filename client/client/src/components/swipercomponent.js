// src/SwiperComponent.js
import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.min.css"; // Import Swiper styles

const SwiperComponent = () => {
  useEffect(() => {
    new Swiper(".swiper-container", {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      autoplay: {
        delay: 3000,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }, []);

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        <div className="swiper-slide">Slide 1</div>
        <div className="swiper-slide">Slide 2</div>
        <div className="swiper-slide">Slide 3</div>
      </div>
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default SwiperComponent;
