//import { Link } from "react-router-dom";
import * as S from "./Login.styled";
import { appRoutes } from "../../lib/appRouts";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../../api";

const Login = ({ setAuth, setUser }) => {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const onLogin = async (event) => {
    event.preventDefault();
    if (!formValues.email) {
      setError("Не введена почта");
      return;
    }

    if (!formValues.password) {
      setError("Не введён пароль");
      return;
    }

    try {
      const response = await login({
        login: formValues.email,
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
                type="email"
                name="email"
                placeholder="Почта"
                value={formValues.email}
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

export default Login;

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
