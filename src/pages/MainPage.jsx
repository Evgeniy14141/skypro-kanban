import { getTodos } from "../api";
import { useState } from "react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import "../App.css";
import Main from "../components/Main/Main";

const MainPage = ({ setAuth, user, setUser }) => {
  const [cards, setCards] = useState([]);
  const [console, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getTodos({
          token: user.token,
        });
        setCards(response.tasks);
        {
          /*setLoading(false);*/
        }
      } catch (error) {
        console.error(error);
        setError("Ошибка при поолучении задач");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [user.token]);
  return (
    <>
      <GlobalStyle />
      <div className="wrapper">
        <Header
          setCards={setCards}
          cards={cards}
          setAuth={setAuth}
          setUser={setUser}
        />
        {error && <p>{error}</p>}
        {!error && <Main cardList={cards} isLoading={isLoading} />}
        <Outlet />
      </div>
    </>
  );
};
export default MainPage;
