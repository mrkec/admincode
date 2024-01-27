import { createContext, useContext, useEffect, useState } from "react";

const TokenContext = createContext();
const TokenProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });

  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parseData = JSON.parse(data);
      setAuth({
        ...auth,
        user: parseData.user,
        token: parseData.jwtToken,
      });
    }
    // eslint-disable-next-line
    // console.log(auth);
  }, []);
  return (
    <TokenContext.Provider value={{ auth, setAuth }}>
      {children}
    </TokenContext.Provider>
  );
};

const useAuth = () => {
  return useContext(TokenContext);
};

export { TokenContext, TokenProvider, useAuth };
