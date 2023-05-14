import React from "react";
import { tel, address } from "../img/images";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container _container">
        <div className="footer__contacts contacts">
          <h2 className="contacts__title">НАШИ КОНТАКТЫ</h2>
          <div className="contacts__icons icons">
            <div className="icons__card">
              <img src={tel} alt="tel" className="icons__logo" />
              <p className="icons__card-text">8 800 700-00-00</p>
            </div>
            <div className="icons__card">
              <img src={address} alt="address" className="icons__logo" />
              <p className="icons__card-text">
                196247, Россия, Москва, Ленинский просп., 151, офис 711
              </p>
            </div>
          </div>
        </div>
        <div className="footer__menu">
          <h2 className="footer__menu-title">Главная</h2>
          <ul className="footer__menu-list">
            <li className="footer__menu-item">О компании</li>
            <li className="footer__menu-item">Услуги</li>
            <li className="footer__menu-item">Отзывы о нас</li>
            <li className="footer__menu-item">Контакты</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
