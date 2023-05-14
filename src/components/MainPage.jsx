import React from "react";

const MainPage = () => {
  return (
    <div className="main__page">
      <div className="main__page-container _container">
        <div className="main__page-info info">
          <h2 className="info__title">
            Демонтаж крупных и мелких зданий <span>от 15000 руб/день</span>
          </h2>
          <p className="info__description">
            В комплекс работ по сносу и демонтажу зданий включена услуга вывоза
            строительного мусора и размещение его на местах хранения ТБО
          </p>
        </div>
        <div className="main__page-form form">
          <h2 className="form__title">Заказать демонтаж</h2>
          <form action="#" className="form__feedback">
            <div class="form__box">
              <input
                type="text"
                placeholder="Ваше имя"
                className="form__input"
              />
            </div>
            <div class="form__box">
              <input type="tel" placeholder="Телефон" className="form__input" />
            </div>
            <div class="form__box">
              <input
                type="email"
                placeholder="E-mail"
                className="form__input"
              />
            </div>
            <div className="form__agreement agreement">
              <input type="checkbox" className="agreement__input" />
              <div className="agreement__text">
                Ознакомлен(а) <span>с пользовательским соглашением</span>
              </div>
            </div>
            <button class="form__button">Отправить заявку</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
