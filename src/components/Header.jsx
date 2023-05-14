import React from "react";
import { Logo } from "../img/images";
const Header = () => {
  return (
    <header className="header">
      <div className="header__container _container">
        <img src={Logo} alt="logo" />
        <nav class="header__menu menu">
          <ul class="menu__list">
            <li class="menu__item">Главная</li>
            <li class="menu__item">О компании</li>
            <li class="menu__item">Услуги</li>
            <li class="menu__item">Отзывы о нас</li>
            <li class="menu__item">Контакты</li>
          </ul>
        </nav>
        <div class="menu-btn">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
