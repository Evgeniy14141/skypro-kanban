//import { Link } from "react-router-dom";
import * as S from "./Login.styled";
import { appRoutes } from "../../lib/appRouts";


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
