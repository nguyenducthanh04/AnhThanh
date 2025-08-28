import React, { useState } from "react";
import { createContext } from "react";
import Header from "../../components/header/header";
import "./main_layout.scss";
export const ThemeContext = createContext();

const MainLayout = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <ThemeContext.Provider value={theme}>
      <div className="layout">
      <Header action = {toggleTheme}/>
      <div className="content">{children}</div>
      </div>
    </ThemeContext.Provider>
  );
};

export default MainLayout;
