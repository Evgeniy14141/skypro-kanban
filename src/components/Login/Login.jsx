//import { Link } from "react-router-dom";
import * as S from "./Login.styled";
import { appRoutes } from "../../lib/appRouts";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../../api";

export default function Login ({ setUser }) {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    login: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const onInputChange = (event) => {
    const { name, value } = event.target; // Извлекаем имя поля и его значение
    setFormValues({ ...formValues, // Копируем текущие данные из состояния
      [name]: value }); // Обновляем нужное поле
  };

  const onLogin = async (event) => {
    event.preventDefault();
    if (!formValues.login || formValues.login.trim().length === 0) {
      setError("Не введен логин");
      return;
    }

    if (!formValues.password || formValues.password.trim().length === 0) {
      setError("Не введён пароль");
      return;
    }

    try {
      const response = await login({
        login: formValues.login,
        password: formValues.password,
      });

      console.log("LOGIN RESPONSE", response);

      setAuth(true);
      setUser(response.user);
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
      <S.ContainerSigin>
        <S.Modal>
          <S.ModalBlock>
            <S.ModalTitleWrapper>
              <S.ModalTitle>Вход</S.ModalTitle>
            </S.ModalTitleWrapper>

            <S.ModalFormLogin onSubmit={onLogin}>
              <S.ModalInput
                type="text"
                value={formValues.login}
                placeholder="Логин"
                name="login"
                onChange={onInputChange}
              ></S.ModalInput>
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={formValues.password}
                onChange={onInputChange}
              ></S.ModalInput>

              {error && <p>{error}</p>}
              <S.ModalButtonEnter type="submit">Войти</S.ModalButtonEnter>
              <S.ModalFormGroup>
                <S.ModalFormText>Нужно зарегистрироваться?</S.ModalFormText>
                <S.ModalFormLink to={appRoutes.REGISTER}>
                  Регистрируйтесь здесь
                </S.ModalFormLink>
              </S.ModalFormGroup>
            </S.ModalFormLogin>
          </S.ModalBlock>
        </S.Modal>
      </S.ContainerSigin>
    </S.Wrapper>
  );
};



{
  /*}
const Login = ({ login }) => {
  return (
    <S.Wrapper>
      <S.ContainerSigin>
        <S.Modal>
          <S.ModalBlock>
            <S.ModalTitleWrapper>
              <S.ModalTitle>Вход</S.ModalTitle>
            </S.ModalTitleWrapper>

            <S.ModalFormLogin id="formLogIn" action="#" onSubmit={login}>
              <S.ModalInput
                type="text"
                name="login"
                id="formlogin"
                placeholder="Эл. Почта"
              ></S.ModalInput>
              <S.ModalInput
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
              ></S.ModalInput>
              <S.ModalButtonEnter id="btnEnter" type="submit">
                Войти
              </S.ModalButtonEnter>
              <S.ModalFormGroup>
                <S.ModalFormText>Нужно зарегистрироваться?</S.ModalFormText>
                <S.ModalFormLink to={appRoutes.REGISTER}>
                    Регистрируйтесь здесь
                  </S.ModalFormLink>
              </S.ModalFormGroup>
            </S.ModalFormLogin>
          </S.ModalBlock>
        </S.Modal>
      </S.ContainerSigin>
    </S.Wrapper>
  );
};

export default Login;
*/
}
