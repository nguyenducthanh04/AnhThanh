import React, { useState } from "react";
import { createContext } from "react";
import Footer from "../../components/footer/footer";
import "./main_layout.scss";
export const ThemeContext = createContext();

const MainLayout = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <ThemeContext.Provider value={theme}>
      <div className={theme === "dark" ? "layout" : "layout_light"}>
      <div className="content">{children}</div>
        <Footer action = {toggleTheme}/>
      </div>
    </ThemeContext.Provider>
  );
};

export default MainLayout;
