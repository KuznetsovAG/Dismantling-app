import React, { useEffect, useState } from "react";

const MainPage = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [userNameDirty, setUserNameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [telephoneDirty, setTelephoneDirty] = useState(false);
  const [userNameError, setUserNameError] = useState(
    "Имя не должно быть пустым"
  );
  const [emailError, setEmailError] = useState("Email не должен быть пустым");
  const [telephoneError, setTelephoneError] = useState(
    "Телефон не должен быть пустым"
  );
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (emailError || telephoneError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, telephoneError]);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLocaleLowerCase())) {
      setEmailError("Не корректный email");
    } else {
      setEmailError("");
    }
  };
  const handleUserName = (e) => {
    setUserName(e.target.value);
    if (!e.target.value) {
      setUserNameError("Имя не должно быть пустым");
    } else {
      setUserNameError("");
    }
  };

  const handleTelephone = (e) => {
    setTelephone(e.target.value);
    if (e.target.value.length < 11) {
      setTelephoneError("Номер должен быть более 11 символов");
      if (!e.target.value) {
        setTelephoneError("Телефон не должен быть пустым");
      }
    } else {
      setTelephoneError("");
    }
  };

  const handleBlur = (e) => {
    switch (e.target.name) {
      case "name":
        setUserNameDirty(true);
        break;
      case "email":
        setEmailDirty(true);
        break;
      case "telephone":
        setTelephoneDirty(true);
        break;
      default:
    }
  };
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
            <div className="form__box">
              {userNameDirty && userNameError && (
                <div className="error__message">{userNameError}</div>
              )}
              <input
                type="text"
                placeholder="Ваше имя"
                className="form__input"
                name="name"
                value={userName}
                onBlur={(e) => handleBlur(e)}
                onChange={(e) => handleUserName(e)}
              />
            </div>
            <div className="form__box">
              {telephoneDirty && telephoneError && (
                <div className="error__message">{telephoneError}</div>
              )}
              <input
                type="text"
                placeholder="Телефон"
                className="form__input"
                name="telephone"
                value={telephone}
                onChange={(e) => handleTelephone(e)}
                onBlur={(e) => handleBlur(e)}
              />
            </div>
            <div className="form__box">
              {emailDirty && emailError && (
                <div className="error__message">{emailError}</div>
              )}
              <input
                type="email"
                placeholder="E-mail"
                className="form__input"
                name="email"
                onChange={(e) => handleEmail(e)}
                value={email}
                onBlur={(e) => handleBlur(e)}
              />
            </div>
            <div className="form__agreement agreement">
              <input type="checkbox" className="agreement__input" />
              <div className="agreement__text">
                Ознакомлен(а) <span>с пользовательским соглашением</span>
              </div>
            </div>
            <button
              disabled={!formValid}
              type="submit"
              className="form__button"
            >
              Отправить заявку
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
