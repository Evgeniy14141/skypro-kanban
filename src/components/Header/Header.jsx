import { useState } from "react";
import * as S from "./Header.styled";
import { appRoutes } from "../../lib/appRouts";
import { Link } from "react-router-dom";
import { useUser } from "../../components/hooks/userUser"; 

const Header = () => {

  const [isOpen, setOpen] = useState(false);
  function handleOpenModal() {
    setOpen((prevState) => !prevState);
  }

  const { userData } = useUser();
 
  return (
    <S.Header>
      <S.Container>
        <S.HeaderBlock>
          <S.HeaderLogoShowLight>
            <S.Link href="" target="_self">
              <S.HeaderLogoImage src="images/logo.png" alt="logo" />
            </S.Link>
          </S.HeaderLogoShowLight>

          <S.HeaderLogoDark>
            <S.Link href="" target="_self">
              <S.HeaderLogoImage src="images/logo_dark.png" alt="logo" />
            </S.Link>
          </S.HeaderLogoDark>

          <S.HeaderNav>
            <S.ButtonHeaderBtnMainNew>
            <Link to={appRoutes.NEW_CARD}>Создать новую задачу</Link>

            </S.ButtonHeaderBtnMainNew>
            <S.HeaderUserHover02 onClick={handleOpenModal}>
            {userData.name}
            </S.HeaderUserHover02>

            {isOpen && (
              <S.HeaderPopUserSetPopUserSet>
                <S.PopUserSetName>{userData.name}</S.PopUserSetName>
                <S.PopUserSetMail>{userData.login}</S.PopUserSetMail>

                <S.PopUserSetTheme>
                  <p>Темная тема</p>
                  <S.InputCheckbox />
                </S.PopUserSetTheme>
                <S.ButtonHover03 >
                  <Link to={appRoutes.EXIT} id="btnExit" type="submit">
                    Выйти
                  </Link>
                </S.ButtonHover03>
              </S.HeaderPopUserSetPopUserSet>
            )}
          </S.HeaderNav>
        </S.HeaderBlock>
      </S.Container>
    </S.Header>
  );
};

export default Header;
