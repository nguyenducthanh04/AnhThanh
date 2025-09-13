import "./chengji.scss";
import FE from "../../assets/images/giai_frontend.jpg";
import SQL from "../../assets/images/giai_sql.jpg";
import Tocfl from "../../assets/images/cc_tocfl.jpg";
import { useContext } from "react";
import { ThemeContext } from "../../layouts/main/main_layout";
function ChengJi() {
    const theme = useContext(ThemeContext);
    return (
        <div className="chengji">
                    <div className={theme === "light" ? "chengji_title" : "chengji_title_dark"}>
                        <h3>Thành tích</h3>
                    </div>
                    <div className="chengji_list">
                        <div className="chengji_item">
                            <img className="chengji_image" src={FE}></img>
                            <p style={theme === "light" ? {} : {color: "white"}}>Giải nhất lập trình Front-End</p>
                        </div>
                        <div className="chengji_item">
                            <img className="chengji_image" src={Tocfl}></img>
                            <p style={theme === "light" ? {} : {color: "white"}}>Đạt được chứng chỉ TOCFL A2</p>
                        </div>
                        <div className="chengji_item">
                            <img className="chengji_image" src={SQL}></img>
                            <p style={theme === "light" ? {} : {color: "white"}}>Giải nhì cuộc thi SQL</p>
                        </div>
                    </div>
                </div>
    )
}
export default ChengJi;