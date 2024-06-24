import { useContext } from "react";
import { TasksContext } from "../../context/tusk"; 

export const useTasks = () => {
  return useContext(TasksContext);
};

/* import { createContext, useState } from "react";

export const TasksContext = createContext(null);
const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const statusList = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
];

  return (
    <TasksContext.Provider value={{ tasks, setTasks, statusList }}>
      {children}
    </TasksContext.Provider>
  );
};
export default TasksProvider; */