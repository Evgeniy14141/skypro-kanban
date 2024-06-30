import { useContext } from "react";
import { TasksContext } from "../../src/context/tusk";

export const useTasks = () => {
  return useContext(TasksContext);
};
