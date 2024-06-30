import { useContext } from "react";
import { UserContext } from "../../src/context/user";

export const useUser = () => {
  return useContext(UserContext);
};
