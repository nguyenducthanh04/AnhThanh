import React from "react";
import MediaQuery from "react-responsive";
import Sidebar from "../../components/sidebar/sidebar";
import Menu from "../../components/menu/menu";
import "./main_layout.scss";

const MainLayout = ({ children }) => {
  return (
    <div className="layout">
      <div className="content">{children}</div>
      <Sidebar />
    </div>
  );
};

export default MainLayout;
