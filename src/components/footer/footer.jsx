import "./footer.scss";
import { FaMoon } from "react-icons/fa";
import { useState, useEffect } from "react";

function Footer() {
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
                <div className="footer_title">
                    <p key={index} className="slide-up">{texts[index]}</p>
                </div>
                <div className="footer_action">
                    <div className="icon_moon">
                        <FaMoon style={{ fontSize: "1.2rem" }} />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;
