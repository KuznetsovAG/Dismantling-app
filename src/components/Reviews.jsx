import React, { useState } from "react";
import { peopleReviews } from "../api/peopleReviews";
const Reviews = () => {
  const [people, setPeople] = useState(peopleReviews);
  const [currentIndex, setCurrentIndex] = useState(0);

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
          {people.map((reviews, personIndex) => {
            let position = "nextSlide";
            if (personIndex === currentIndex) {
              position = "activeSlide";
            }
            if (
              personIndex === currentIndex - 1 ||
              (currentIndex === 0 && personIndex === people.length - 1)
            ) {
              position = "lastSlide";
            }
            return (
              <div key={reviews.id} className="customer__card">
                <div className="customer__header">
                  <div className="customer__logo">
                    <img src={reviews.image} alt="" />
                  </div>
                  <p className="customer__name">{reviews.name}</p>
                </div>
                <div className="customer__text">{reviews.message}</div>
              </div>
            );
          })}
        </div>
        {/* <button
          className="prevButton"
          onClick={() => setCurrentIndex((prevState) => prevState - 1)}
        >
          LEFT
        </button>
        <button
          className="nextButton"
          onClick={() => setCurrentIndex((prevState) => prevState + 1)}
        >
          RIGHT
        </button> */}
      </div>
    </div>
  );
};

export default Reviews;
