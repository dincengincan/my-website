import { createContext, useMemo, useState } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);

  const value = useMemo(() => ({ userInfo, setUserInfo }), [
    userInfo,
    setUserInfo,
  ]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
