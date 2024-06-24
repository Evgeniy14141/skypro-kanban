import { createContext, useState } from "react";

export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const getUserFromLocalStorage = () => {
    const userInfo = localStorage.getItem("user");

    return userInfo ? JSON.parse(userInfo) : null;
  };

  const [userData, setUserData] = useState(getUserFromLocalStorage());

  const logout = () => {
    setUserData(null);
    localStorage.removeItem("user");
  };

  const setUser = (newUser) => {
    setUserData(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
  };

  return (
    <UserContext.Provider value={{ userData, logout, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
