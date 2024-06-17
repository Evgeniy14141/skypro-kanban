import { useContext } from "react";
import { UserContext } from "../../contex/user";

export const useUser = () => {
    return useContext(UserContext);
}