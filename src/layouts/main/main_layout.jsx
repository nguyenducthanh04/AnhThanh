import React from "react";
import Header from "../../components/header/header";
import "./main_layout.scss";

const MainLayout = ({ children }) => {
  return (
    <div className="layout">
      <Header/>
      <div className="content">{children}</div>
    </div>
  );
};

export default MainLayout;
