import "./contect.scss";
import { Link } from "react-router-dom";

function Contect() {
    return (
           <div className="contect">
                  <div className="contect_title">
                    <h3>Contect</h3>
                  </div>
                  <div className="contect_content">
                    <p className="mail">
                      Liên hệ mình ở <em style={{color: "red"}}>dducthanh04@gmail.com</em>
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