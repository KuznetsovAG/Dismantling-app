import React from "react";
import { equipment, dismantling, explosion } from "../img/images";
const Service = () => {
  return (
    <div className="service">
      <div className="service__container _container">
        <div className="service__info">
          <div className="service__header">
            <h2 className="service__title">Предлагаем Вам:</h2>
            <p className="service__header-text">НАШИ УСЛУГИ</p>
          </div>
          <p className="service__description">
            Наша компания предлагает услуги по демонтажу и сносу любых зданий и
            сооружений. Большой опыт работы позволяет нашим специалистам
            правильно определить как правильно произвести снос и демонтаж зданий
            - механизированным или ручным способом разборки объектов.{" "}
          </p>
        </div>
        <div className="service__types">
          <div className="service__card">
            <img src={dismantling} alt="dismantling" />
            <div className="service__card-description">
              <h2 className="service__card-title">ДЕМОНТАЖ ЗДАНИЙ</h2>
              <p className="service__card-text">
                Контролируемая ликвидация здания/сооружения путём разборки и
                обрушения.
              </p>
              <button className="service__card-button">Оставить заявку</button>
            </div>
          </div>
          <div className="service__card">
            <img src={explosion} alt="explosion" />
            <div className="service__card-description">
              <h2 className="service__card-title">Взрывные работы</h2>
              <p className="service__card-text">
                Работы, связанные с применением взрывчатых веществ при
                разрушении различных предметов, сооружений из твердых материалов
              </p>
              <button className="service__card-button">Оставить заявку</button>
            </div>
          </div>
          <div className="service__card">
            <img src={equipment} alt="equipment" />
            <div className="service__card-description">
              <h2 className="service__card-title">Аренда спецтехники</h2>
              <p className="service__card-text">
                Огромный выбор спецтехники. Быстрая подача и гибкая система
                скидок.
              </p>
              <button className="service__card-button">Оставить заявку</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
