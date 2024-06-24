import { getTodos } from "../api";
import { useState } from "react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import "../App.css";
import Main from "../components/Main/Main";
import Header from "../components/Header/Header";
import { useUser } from "../../src/components/hooks/userUser";
import { useTasks } from "../../src/components/hooks/userTusk";
import { GlobalStyle } from "../global.styled";
import * as S from "../components/Login/Login.styled";

const MainPage = () => {
  const { userData } = useUser();
  const { setTasks } = useTasks();
  const [getTasksError, setGetTasksError] = useState(null);
  const [isLoadingGetTasks, setLoadingGetTasks] = useState(false);
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setLoadingGetTasks(true);
        const newTasks = await getTodos({ token: userData.token });
        setTasks(newTasks.tasks);
      } catch (error) {
        setGetTasksError(error.message);
      } finally {
        setLoadingGetTasks(false);
      }
    };
    fetchTasks();
  }, []);

  return (
    <>
      <GlobalStyle />
      <S.Wrapper>
        <Header />
        {getTasksError && <p>{getTasksError}</p>}
        {!getTasksError && <Main isLoading={isLoadingGetTasks} />}
        <Outlet />
      </S.Wrapper>
    </>
  );
};
export default MainPage;
