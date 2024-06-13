import { appRoutes } from "../../lib/appRouts";
//import { Button } from "../../components/shared.styled";
import * as S from "./PopExit.style";
//import { Link } from "react-router-dom";

const PopExit = ({ logout }) => {
  return (
    <S.PopExit>
      <S.PopExitContainer>
        <S.PopExitBlock>
          <S.PopExitTitle>
            <h2>Выйти из аккаунта?</h2>
          </S.PopExitTitle>
          <S.PopExitForm id="formExit" action="#">
            <S.PopExitFormGroup>
              <S.ButtonPopExitYes $primary onClick={logout}>
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