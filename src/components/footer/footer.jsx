import "./footer.scss";
import { FaMoon, FaSun } from "react-icons/fa";
import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../layouts/main/main_layout";

function Footer( {action} ) {
    const theme = useContext(ThemeContext);
    const texts = [
        "Website này được viết bằng Reactjs",
        "© 2025 Thanhh"
    ];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % texts.length);
        }, 3000); 
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="footer_wrapper">
            <div className="footer_main">
                <div className={theme === "light" ? "footer_title" : "footer_title_dark"}>
                    <p key={index} className="slide-up">{texts[index]}</p>
                </div>
                <div className="footer_action">
                    <div className="icon_dark_mode" onClick={action}>
                        {theme === "light" ? <FaMoon className={ theme === "dark" ? "icon_moon_dark" : "icon_moon" } /> : <FaSun className={ theme === "dark" ? "icon_sun_dark" : "icon_sun" } />}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;
