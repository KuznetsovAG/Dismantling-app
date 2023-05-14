import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SimpleCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider__container">
      <Slider {...settings}>
        <div>
          <img
            src="https://www.aggressivehydraulics.com/wp-content/uploads/2019/11/AHI_Demo_1600x900.jpg"
            alt="slide-1"
            className="slider__card"
          />
        </div>
        <div>
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgzkE9Q5ln6ZWEtJN8-lyxHbR0B_U2ecgbSrcWIHr4Fecf8T9qKrdjLaEemto0S-g9sVDH4C_E8FKONUDr_5SuWAiuNSyWxutNf0gKvSkH7F37aYbPf_Q0E2LgDYZjo35q7FgJk9zqfQSqoa3Wyii2dDViPZnEwbU1WzcxcFI3rDhGWqVzGdPiESE7o/s1600/%D0%A1%D1%82%D1%80%D0%BE%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D1%82%D0%B2%D0%BE%20%D0%BC%D1%83%D1%81%D0%BE%D1%80.jpg"
            alt="slide-2"
            className="slider__card"
          />
        </div>
        <div>
          <img
            src="https://gosekspertiza.tatarstan.ru/file/news/4363_n2059564_big.jpg"
            alt="slide-3"
            className="slider__card"
          />
        </div>
      </Slider>
    </div>
  );
};

export default SimpleCarousel;
