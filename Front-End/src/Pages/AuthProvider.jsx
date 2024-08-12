import React, {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [name, setName] = useState(null);
  const [loading, setLoading] = useState(true); // Yüklenme durumu ekleniyor

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (storedToken) {
      setToken(storedToken);
    }
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
        setName(JSON.parse(storedUser).name);
      } catch (error) {
        console.error(
          "Error parsing stored user data:",
          error
        );
        setUser(null);
      }
    }
    setLoading(false); // Yüklenme durumu tamamlandı f5 sorunu çözüldü
  }, []);

  const login = (token, user) => {
    setToken(token);
    setUser(user);
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("password");
  };

  return (
    <AuthContext.Provider
      value={{ name, token, user, login, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
