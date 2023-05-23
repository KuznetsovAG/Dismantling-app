import React from "react";
import { useForm } from "react-hook-form";

const MainPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
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
          <form onSubmit={handleSubmit(onSubmit)} className="form__feedback">
            <div className="form__box">
              {errors?.userName && (
                <div className="error__message">
                  {errors.userName.message || "Введите значение"}
                </div>
              )}
              <input
                type="text"
                placeholder="Ваше имя"
                className="form__input"
                {...register("userName", {
                  required: "Поле обязательно для заполнения",
                  minLength: {
                    value: 3,
                    message: "Имя должно содержать больше 3 символов",
                  },
                })}
              />
            </div>
            <div className="form__box">
              {errors?.telephoneValue && (
                <div className="error__message">
                  {errors.telephoneValue.message}
                </div>
              )}
              <input
                type="text"
                placeholder="Телефон"
                className="form__input"
                {...register("telephoneValue", {
                  required: "Поле обязательно для заполнения",
                  pattern: {
                    value: /^\+7[0-9]{10}$/,
                    message: "Формат ввода +7**********",
                  },
                })}
              />
            </div>
            <div className="form__box">
              {errors?.emailValue && (
                <div className="error__message">
                  {errors.emailValue.message}
                </div>
              )}
              <input
                type="email"
                placeholder="E-mail"
                className="form__input"
                {...register("emailValue", {
                  required: "Поле обязательно для заполнения",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
            </div>

            <div className="form__agreement agreement">
              <input
                type="checkbox"
                {...register("checkboxValue", {
                  required: "Argument is required",
                })}
                className="agreement__input"
              />
              <div className="agreement__text">
                Ознакомлен(а) <span>с пользовательским соглашением</span>
              </div>
              {errors?.checkboxValue && (
                <div className="error__message-checkbox">
                  {errors.checkboxValue.message}
                </div>
              )}
            </div>

            <input
              type="submit"
              value="Отправить заявку"
              className="form__button"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
