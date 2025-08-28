import "./header.scss";
import { useContext } from "react";
import Avatar from "../../assets/images/thanh.jpg";
import {FaShareSquare, FaRegMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../layouts/main/main_layout";
function Header( {action} ) {
    const theme = useContext(ThemeContext);
    return (
        <div className={theme === "light" ? "header_wrapper" : "header_wrapper_dark_mode"}>
            <div className="header_left">
                <div className="header_avatar">
                    <img src={Avatar} className="avatar"></img>
                </div>
                <div className="header_name">
                    <p className={theme === "light" ? "name" : "name_dark_mode"}>Nguyen Duc Thanh</p>
                </div>
            </div>
            <div className="header_right">
                <div className="header_action">
                   <div className="theme_icon">
                        {theme === "dark" ?
                        <FaSun onClick={action} className={theme === "dark" ? "dark_icon" : ""}/> 
                        : 
                        <FaRegMoon onClick={action} className={theme === "dark" ? "dark_icon" : ""}/>
                        }
                    </div>
                </div>
                <div className="share_btn">
                    <FaShareSquare className={theme === "light" ? "share_icon" : "share_icon_dark_mode"}/>
                </div>
            </div>
        </div>
    )
}
export default Header;