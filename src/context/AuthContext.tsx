import {
  createContext,
  useContext,
  useState,
  useEffect
} from "react";

import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export default function AuthProvider({ children }) {

  const [user, setUser] = useState(null);

  useEffect(() => {

    const token = localStorage.getItem("access");

    if (token) {

      try {

        const decoded = jwtDecode(token);
        setUser(decoded);

        const currentTime = Date.now() / 1000;

        if (decoded.exp < currentTime) {
          logout();
        }

      } catch (error) {

        console.log("Invalid token");

        localStorage.removeItem("token");
      }
    }

  }, []);
  

  const login = (access, refresh) => {

    localStorage.setItem("access", access);

    localStorage.setItem("refresh", refresh);

    const decoded = jwtDecode(access);
    

    setUser(decoded);
  };

  const logout = () => {

    localStorage.removeItem("access");

    localStorage.removeItem("refresh");

    setUser(null);
  };

  return (

    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        setUser,
      }}
    >

      {children}

    </AuthContext.Provider>
  );
}
export const useAuth = () => useContext(AuthContext);


