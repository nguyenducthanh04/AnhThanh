import { useContext } from "react";
import { ThemeContext } from "../../layouts/main/main_layout";
import "./achievement.scss";
import Giai1 from "../../assets/images/giaithuong1.jpg";
import Giai2 from "../../assets/images/giaithu2.jpg";

function Achievement() {
    const theme = useContext(ThemeContext);
    return (
            <div className="achievements">
                <div className={theme === "light" ? "achievements_title" : "achievements_title_dark_mode"}>
                    <h1>Thành tích nổi bật</h1>
                </div>
                <div className="achi_list">
                    <div className="achi_item">
                        <div className="achi_item_image">
                            <img src={Giai1}></img>
                        </div>
                        <div className="achi_item_desc">
                            <p>Mình và các bạn trong lớp có tham gia cuộc thi lập trình Front-End do trường tổ chức và đã dành giải nhất.</p>
                        </div>
                    </div>
                    <div className="achi_item">
                        <div className="achi_item_image">
                            <img src={Giai2}></img>
                        </div>
                        <div className="achi_item_desc">
                            <p>Mình có tham gia cuộc thi tài năng cơ sở dữ liệu do trường tổ chức và đã đạt được giải nhì, tuy không cao nhưng cũng là kết quả cho sự nỗ lực của mình.</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default Achievement;