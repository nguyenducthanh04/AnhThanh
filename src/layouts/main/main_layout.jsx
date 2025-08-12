import React from "react";
import Sidebar from "../../components/sidebar/sidebar";
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
