import { appRoutes } from "../lib/appRouts";
import * as S from "./NotFoundPage.styled";

const PageNotFound = () => {
  return (
    <S.Container>
      <S.Title>404</S.Title>
      <S.Description>Страница не найдена</S.Description>
      <S.HomeButton to={appRoutes.MAIN}>Вернуться на главную</S.HomeButton>
    </S.Container>
  );
};

export default PageNotFound;
