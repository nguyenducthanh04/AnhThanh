import "./contect.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../layouts/main/main_layout";
function Contect() {
    const theme = useContext(ThemeContext);
    return (
           <div className="contect">
                  <div className="contect_title">
                    <h3 style={theme === "light" ? {} : {color: "white"}}>Contect</h3>
                  </div>
                  <div className="contect_content">
                    <p style={theme === "light" ? {} : {color: "white"}}>
                      Liên hệ mình ở <em style={theme === "light" ? {color: "red"} : {color: "green"}}>dducthanh04@gmail.com</em>
                    </p>
                    <div className="social">
                      <Link to={"https://www.facebook.com/nguyen.uc.thanh.475548/"} className="btn_link">
                        <button className="social_btn">Facebook</button>
                      </Link>
                         <Link to={"https://www.instagram.com/de.qing_/"} className="btn_link">
                        <button className="social_btn">Instagram</button>
                      </Link>
                         <Link to={"https://github.com/nguyenducthanh04"} className="btn_link">
                        <button className="social_btn">Github</button>
                      </Link>
                    </div>
                  </div>
                </div>
    )
}
export default Contect;