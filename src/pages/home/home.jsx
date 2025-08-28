import "./home.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { FaFacebook, FaGithub, FaInstagram} from "react-icons/fa";
import { ThemeContext } from "../../layouts/main/main_layout";
import Avatar from "../../assets/images/thanh.jpg";
import Achievement from "../../components/achievements/achievement";
import Project from "../../components/projects/project";
import Blog from "../../components/blogs/blog";
function Home() {
    const theme = useContext(ThemeContext);
    return (
        <>
        <div className={theme === "light" ? "home_wrapper" : "home_wrapper_dark_mode"}>
            <div className="home_content">
                <div className="cover_photo">
                    <img src="https://chiasekienthuc.com.vn/images/2023-03/Quy-tac-dat-ten-trong-JavaScript.jpg" />
                </div>
            <div className="home_avatar">
                <img src={Avatar} />
            </div>
        </div>
            <div className="home_user_name">
                <h1 className={theme === "dark" ? "name_dark_mode" : ""}>Nguyễn Đức Thanh</h1>
            </div>
            <div className="socials">
                <Link to={"https://www.facebook.com/nguyen.uc.thanh.475548"} target="_blank" className="social_link">
                    <div className={theme === "light" ? "social_icon" : "social_icon_dark_mode"}>
                        <FaFacebook/>
                    </div>
                   </Link>
                   <Link to={"https://github.com/nguyenducthanh04"} target="_blank" className="social_link">
                    <div className={theme === "light" ? "social_icon" : "social_icon_dark_mode"}>
                        <FaGithub/>
                    </div>
                   </Link>
                   <Link to={"https://www.instagram.com/de.qing_/"} target="_blank" className="social_link">
                    <div className={theme === "light" ? "social_icon" : "social_icon_dark_mode"}>
                        <FaInstagram/>
                    </div>
                   </Link>
            </div>
            <div style={{padding:  '1% 5%'}}>
                <hr></hr>
            </div>
            <Achievement/>
            <Project/>
            <Blog/>
        </div>
    </>  
    )
}
export default Home;