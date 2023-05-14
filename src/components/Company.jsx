import React from "react";
import { company, target, dimond, montain, excavator } from "../img/images";
const Company = () => {
  return (
    <div className="company">
      <div className="company__container _container">
        <div className="company__info">
          <img src={company} alt="company" className="company__img" />
          <div className="company__body">
            <p className="company__header">О КОМПАНИИ</p>
            <h2 className="company__title">
              ДЕМОНТАЖ ЛЮБОЙ СЛОЖНОСТИ – БЫСТРО, КАЧЕСТВЕННО, ДЕШЕВО!
            </h2>
            <p className="company__description">
              Наша компания предлагает услуги по демонтажу и сносу любых зданий
              и сооружений в Москве, Московской области, а также прилегающих
              областях. Большой опыт работы позволяет нашим специалистам
              правильно определить как правильно произвести снос и демонтаж
              зданий - механизированным или ручным способом разборки объектов.
            </p>
          </div>
        </div>
        <div className="company__brands brands">
          <div className="brands__card">
            <img src={target} alt="target" />
          </div>
          <div className="brands__card">
            <img src={dimond} alt="dimond" />
          </div>
          <div className="brands__card">
            <img src={montain} alt="montain" />
          </div>
          <div className="brands__card">
            <img src={excavator} alt="excavator" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
