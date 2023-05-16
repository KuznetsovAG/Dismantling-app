import React, { useState } from "react";
import { Logo } from "../img/images";
const Header = () => {
  const [active, setActive] = useState(null);
  return (
    <header className="header">
      <div className="header__container _container">
        <img src={Logo} alt="logo" />
        <nav className="header__menu menu">
          <ul className="menu__list">
            <li className="menu__item">Главная</li>
            <li className="menu__item">О компании</li>
            <li className="menu__item">Услуги</li>
            <li className="menu__item">Отзывы о нас</li>
            <li className="menu__item">Контакты</li>
          </ul>
        </nav>
        <div
          className="header__mobile-menu"
          onClick={() => setActive((prevState) => !prevState)}
        >
          <div className={"menu-btn " + (active ? "active" : "")}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={"menu__nav " + (active ? "active" : "")}>
          <nav className="nav__mobile">
            <ul className="nav__list">
              <li className="nav__item">Главная</li>
              <li className="nav__item">О компании</li>
              <li className="nav__item">Услуги</li>
              <li className="nav__item">Отзывы о нас</li>
              <li className="nav__item">Контакты</li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
