import React, { useState } from "react";
import { peopleReviews } from "../api/peopleReviews";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Reviews = () => {
  const [people] = useState(peopleReviews);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="reviews">
      <div className="reviews__container _container">
        <div className="reviews__info">
          <div className="reviews__header">
            <h2 className="reviews__title">МЫ ЦЕНИМ ВАШЕ МНЕНИЕ</h2>
            <p className="reviews__header-text">ОТЗЫВЫ КЛИЕНТОВ</p>
          </div>
          <p className="reviews__description">
            Наша компания проделывает всю работу с нуля и до качественного
            результата при этом наши клиенты всегда довольны сроками выполнения
            демонтажа и стоимостью услуг, если обращаются к нам
          </p>
        </div>
        <div className="reviews__customer customer">
          <Slider {...settings}>
            {people.map((reviews) => (
              <div key={reviews.id}>
                <div className="customer__card">
                  <div className="customer__header">
                    <div className="customer__logo">
                      <img src={reviews.image} alt="" />
                    </div>
                    <p className="customer__name">{reviews.name}</p>
                  </div>
                  <div className="customer__text">{reviews.message}</div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
