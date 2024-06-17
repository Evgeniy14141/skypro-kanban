import { useContext } from "react";
import { TasksContext } from "../../contex/tusk"; 

export const useTasks = () => {
  return useContext(TasksContext);
};