import { useState } from "react";
import * as S from "./Header.styled";

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
          <div className="header__logo _show _light">
            <a href="" target="_self">
              <img src="images/logo.png" alt="logo" />
            </a>
          </div>

          <div className="header__logo _dark">
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </div>

          <S.HeaderNav>
            <S.HeaderBtnMainNew onClick={onAddCard}>
              Создать новую задачу
            </S.HeaderBtnMainNew>
            <S.HeaderUserHover02 onClick={handleOpen}>
              Ivan Ivanov
            </S.HeaderUserHover02>

            {isOpen && (
              <div className="header__pop-user-set pop-user-set">
                <S.PopUserSetName>Ivan Ivanov</S.PopUserSetName>
                <S.PopUserSetMail>ivan.ivanov@gmail.com</S.PopUserSetMail>
                <S.PopUserSetTheme>
                  <p>Темная тема</p>
                  <S.Checkbox></S.Checkbox>
                </S.PopUserSetTheme>

                <S.Hover03>
                  <a href="#popExit">Выйти</a>
                </S.Hover03>
              </div>
            )}
          </S.HeaderNav>
        </S.HeaderBlock>
      </S.Container>
    </S.Header>
  );
};

export default Header;
