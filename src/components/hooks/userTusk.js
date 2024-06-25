import { useContext } from "react";
import { TasksContext } from "../../context/tusk";

export const useTasks = () => {
  return useContext(TasksContext);
};
