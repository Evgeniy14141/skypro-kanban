import * as S from "./Login.styled";
import { appRoutes } from "../../lib/appRouts";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../../api";
import { useUser } from "../../components/hooks/userUser";
import { GlobalStyle } from "../../global.styled";

const Login = () => {
  const { setUser } = useUser();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const [formValues, setFormValues] = useState({
    login: "",
    password: "",
  });

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const onLogin = async (event) => {
    event.preventDefault();

    if (!formValues.login) {
      setError("Введите логин");
      return;
    }

    if (!formValues.password) {
      setError("Введите пароль");
      return;
    }

    try {
      const response = await loginUser({
        login: formValues.login,
        password: formValues.password,
      });

      console.log("LOGIN RESPONSE", response.user);

      setError(null);
      setUser(response.user);
      navigate(appRoutes.MAIN);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <GlobalStyle />
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
                <S.ModalButtonEnter
                  id="btnEnter"
                  type="submit"
                  onClick={onLogin}
                >
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
    </>
  );
};

export default Login;
