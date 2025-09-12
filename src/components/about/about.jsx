import Avatar from "../../../src/assets/images/thanh.jpg"
import "./about.scss";
import { useContext } from "react";
import { ThemeContext } from "../../layouts/main/main_layout";
function About() {
    const theme = useContext(ThemeContext);
    return (
             <div className="about">
                    <div className="about_left">
                        <h2 className={ theme === "dark" ? "about_name_dark" : "about_name"}>Hi, mình là Thanhh</h2>
                        <p className={ theme === "dark" ? "about_title_dark" : "about_title"}>Đây là trang web cá nhân của mình</p>
                        <ul className="about_footer">
                            <li>Sinh viên</li>
                            <li>Đại học Đại Nam</li>
                            <li>Lập trình viên</li>
                            <li>Cột sống sinh viên đầy tham vọng</li>
                        </ul>
                    </div>
                     <div className="about_right">
                        <img src={Avatar}></img>
                    </div>
                </div>
    )
}
export default About;