import { useState } from "react";
import * as S from "./Header.styled";
import { appRoutes } from "../../lib/appRouts";
import { Link } from "react-router-dom";

const Header = ({ setCards, cards }) => {
  const [isOpen, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const onAddCard = () => {
    const newCard = {
      id: Date.now(),
      title: "TEST",
      topic: "Research",
      date: "12.05.2024",
      status: "Без статуса",
    };

    const newCardList = [...cards, newCard];
    setCards(newCardList);
  };

  return (
    <S.Header>
      <S.Container>
        <S.HeaderBlock>
          <S.HeaderLogoShowLight>
            <S.Link href="*" target="_self">
              <S.HeaderLogoImage src="images/logo.png" alt="logo" />
            </S.Link>
          </S.HeaderLogoShowLight>

          <S.HeaderLogoDark>
            <S.Link href="" target="_self">
              <S.HeaderLogoImage src="images/logo_dark.png" alt="logo" />
            </S.Link>
          </S.HeaderLogoDark>

          <S.HeaderNav>
            <S.ButtonHeaderBtnMainNew onClick={onAddCard}>
              Создать новую задачу
            </S.ButtonHeaderBtnMainNew>
            <S.HeaderUserHover02 onClick={handleOpen}>
              Ivan Ivanov
            </S.HeaderUserHover02>

            {isOpen && (
              <S.HeaderPopUserSetPopUserSet>
                <S.PopUserSetName>Ivan Ivanov</S.PopUserSetName>
                <S.PopUserSetMail>ivan.ivanov@gmail.com</S.PopUserSetMail>

                <S.PopUserSetTheme>
                  <p>Темная тема</p>
                  <S.InputCheckbox />
                </S.PopUserSetTheme>
                <S.ButtonHover03>
                  
                  <Link  to={appRoutes.EXIT} id="btnExit" type="submit">Выйти</Link >
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
