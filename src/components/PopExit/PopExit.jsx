import { useNavigate } from "react-router-dom";
import { appRoutes } from "../../lib/appRouts";
import { useUser } from "../hooks/userUser";
import * as S from "./PopExit.style";

const PopExit = () => {
  const navigate = useNavigate();
  const { logout } = useUser();
  function onLogout(e) {
    e.preventDefault();
    logout();

    navigate(appRoutes.LOGIN);
  }
  return (
    <S.PopExit>
      <S.PopExitContainer>
        <S.PopExitBlock>
          <S.PopExitTitle>
            <h2>Выйти из аккаунта?</h2>
          </S.PopExitTitle>
          <S.PopExitForm id="formExit" action="#">
            <S.PopExitFormGroup>
              <S.ButtonPopExitYes $primary onClick={onLogout}>
                Да, выйти
              </S.ButtonPopExitYes>
              <S.ButtonNo to={appRoutes.MAIN}>Нет, остаться</S.ButtonNo>
            </S.PopExitFormGroup>
          </S.PopExitForm>
        </S.PopExitBlock>
      </S.PopExitContainer>
    </S.PopExit>
  );
};
export default PopExit;
