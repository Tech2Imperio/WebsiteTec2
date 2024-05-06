import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { data, sliderSettings } from "../../../Utils/control";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/autoplay";
import "./Slider.css";

export const ProductSlider = () => {
  return (
    <section id="products" className="main-container">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="PrimaryText">Popular Railings</span>
        </div>

        <Swiper
          className="slide-swiper"
          modules={[Autoplay]}
          {...sliderSettings}
        >
          <SliderButtons />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <Link to={card.url} className="flexColStart  r-card">
                <img src={card.image} alt={card.name + "railings"} />
                <span className="primaryText">{card.name}</span>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className=" flexCenter  r-buttons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};