//import { useEffect, useState } from "react";
import Column from "../Column/Column";
import * as S from "./Main.styled";
import { Container } from "../shared.styled";
//import MainPage from "../../pages/MainPage";
//import UserProvider from "./contex/user.jsx";
import { useTasks } from "../../components/hooks/userTusk";





const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];



const Main = ({ isLoading }) => {
   const { tasks, setTasks } = useTasks();
  /*const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setTasks("Ответ от сервера")
  }, []); */


  return (
    
      <S.Main>
        <Container>
          <S.MainBlock>
            <S.MainContent>
            {isLoading === true && (<p>Идет загрузка...</p>)}
            {isLoading === false && statusList.map((status) => (
              <Column
                key={status}
                title={status}
                taskList={tasks.filter((card) => card.status === status)}
              />
            ))}
            </S.MainContent>
          </S.MainBlock>
        </Container>
      </S.Main>
    
  );
};

export default Main;
