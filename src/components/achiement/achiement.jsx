import "./achiement.scss";
import { useContext } from "react";
import { ThemeContext } from "../../layouts/main/main_layout";
function Achiement() {
    const theme = useContext(ThemeContext);
    return (
        <div className="achiement">
                    <div className={theme === "light" ? "achiement_title" : "achiement_title_dark"}>
                        <h3>Kinh nghiệm</h3>
                    </div>
                    <div className="achiement_list">
                        <div className="achiement_item">
                            <div className="achiement_item_name">
                                <p style={theme === "light" ? {} : {color: "white"}}>Smartcom Việt Nam</p>
                                <p style={theme === "light" ? {fontSize: "0.7rem"} : {fontSize: "0.7rem", color: "#707375"}}>Developer</p>
                            </div>
                            <div className="achiement_time">
                                <p style={theme === "light" ? {} : {color: "white"}}>2025</p>
                            </div>
                        </div>
                    </div>
                </div>
    )
}
export default Achiement;