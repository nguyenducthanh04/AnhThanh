import "./header.scss";
import Avatar from "../../assets/images/thanh.jpg";
import {FaShareSquare, FaMoon, FaRegMoon } from "react-icons/fa";
import { Link } from "react-router-dom";
function Header() {
    const toggleTheme = () => {
        alert("theme");
    }
    return (
        <div className="header_wrapper">
            <div className="header_left">
                <div className="header_avatar">
                    <img src={Avatar} className="avatar"></img>
                </div>
                <div className="header_name">
                    <p className="name">Nguyen Duc Thanh</p>
                </div>
            </div>
            <div className="header_right">
                <div className="header_social">
                   <div className="social_icon">
                        <FaRegMoon onClick={toggleTheme}/>
                    </div>
                </div>
                <div className="share_btn">
                    <FaShareSquare className="share_icon"/>
                </div>
            </div>
        </div>
    )
}
export default Header;