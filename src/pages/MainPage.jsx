import "../App.css";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import { useState } from "react";
import { cardList } from "../data";
import { GlobalStyle } from "../global.styled";
import { Outlet } from "react-router-dom";




export default function MainPage() {
  const [cards, setCards] = useState(cardList);
  return (
    <>
      <GlobalStyle />
      <div className="wrapper">
        <Outlet />
        <Header setCards={setCards} cards={cards} />
        <Main cardList={cards} />
      </div>
    </>
  );
}




