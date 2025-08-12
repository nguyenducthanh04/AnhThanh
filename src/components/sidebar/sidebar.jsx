import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaBriefcase, FaUser, FaEnvelope, FaLightbulb, FaBars, FaTimes } from "react-icons/fa";
import "./sidebar.scss";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const menuItems = [
    { label: "HOME", icon: <FaHome />, link: "/" },
    { label: "PORTFOLIO", icon: <FaBriefcase />, link: "/portfolio" },
    { label: "PROFILE", icon: <FaUser />, link: "/profile" },
    { label: "CONTACT", icon: <FaEnvelope />, link: "/contact" },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="wrapper">
      <div className="dark_mode_btn">
        <FaLightbulb className="dark_mode_icon"/>
      </div>
      
      <button className="mobile-menu-btn" onClick={toggleSidebar}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      
      <div className={`sidebar ${isOpen ? 'active' : ''}`}>
        {menuItems.map((item, index) => (
          <Link to={item.link} className="sidebar-item" key={index} onClick={() => setIsOpen(false)}>
            <span className="sidebar_icon">{item.icon}</span>
            <span className="text">{item.label}</span>
          </Link>
        ))}
        <div className="language">
          <span>中文</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
