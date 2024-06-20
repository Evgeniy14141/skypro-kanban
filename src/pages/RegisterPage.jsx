import * as S from "./RegisterPage.styled.js";
//import { Link } from "react-router-dom";
import { appRoutes } from "../lib/appRouts.jsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { registration } from "../api.js";
//import { useUser } from "../../src/components/hooks/userUser.js";


export default function RegisterPage () {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    name: "",
    login: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const onInputChange = (event) => {
    const { name, value } = event.target; // Извлекаем имя поля и его значение
    setFormValues({ ...formValues, // Копируем текущие данные из состояния
      [name]: value }); // Обновляем нужное поле
  };

  const onRegister = async (event) => {
    event.preventDefault();

    if (!formValues.name || formValues.name.trim().length === 0) {
      setError("Не введено имя.");
      return;
    }

    if (!formValues.login || formValues.login.trim().length === 0) {
      setError("Не введен логин");
      return;
    }

    if (!formValues.password || formValues.password.trim().length === 0) {
      setError("Не введён пароль");
      return;
    }

    try {
      const response = await registration ({
        name: formValues.name,
        login: formValues.login,
        password: formValues.password,
      });

      console.log ("REGISTER RESPONSE", response);

      //setAuth(true);
      //setUser(response.user);
      navigate(appRoutes.MAIN);
    } catch (error) {
      console.error(error.message);
      if (error.message === "Failed to fetch") {
        setError("Ошибка соединения");
        return;
      }
      setError(error.message);
    }
  };

  return (
    <S.Wrapper>
      <S.ContainerSignup>
        <S.Modal>
          <S.ModalBlock>
            <S.ModalTitle>
              <S.ModalTitleText>Регистрация</S.ModalTitleText>
            </S.ModalTitle>
            <S.ModalFormLogin onSubmit={onRegister}>
              <S.ModalInput
                type="text"
                name="name"
                value={formValues.name}
                onChange={onInputChange}
                id="first-name"
                placeholder="Имя"
              />
              <S.ModalInput
                type="text"
                name="login"
                value={formValues.login}
                onChange={onInputChange}
                id="loginReg"
                placeholder="Логин"
              />
              <S.ModalInput
                type="password"
                value={formValues.password}
                onChange={onInputChange}
                name="password"
                id="passwordFirst"
                placeholder="Пароль"
              />
              <S.ModalButtonSignup id="SignUpEnter">
                <S.ModalButtonLink to={appRoutes.REGISTER}>
                  Зарегистрироваться
                </S.ModalButtonLink>
              </S.ModalButtonSignup>
              <S.ModalFormGroup>
                <S.ModalFormText>
                  Уже есть аккаунт?{" "}
                  <S.ModalFormLink to={appRoutes.MAIN}>
                    Войдите здесь
                  </S.ModalFormLink>
                </S.ModalFormText>
              </S.ModalFormGroup>
            </S.ModalFormLogin>
          </S.ModalBlock>
        </S.Modal>
      </S.ContainerSignup>
    </S.Wrapper>
  );
};

//export default RegisterPage;
