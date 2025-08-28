import "./project.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../layouts/main/main_layout";
import Project1 from "../../assets/images/project_1.png";
import Project2 from "../../assets/images/project2.jpg";
import Project3 from "../../assets/images/project3.png";


function Project() {
    const theme = useContext(ThemeContext);
    return (
          <div className="projects">
                <div className= {theme === "light" ? "projects_title" : "projects_title_dark_mode"}>
                    <h1>Các dự án đã làm được</h1>
                </div>
                <div className="project_list">
                    <div className="project_item">
                        <div className="project_item_image">
                            <img src={Project1}></img>
                        </div>
                        <div className="project_item_desc">
                            <p>Mình có sở thích là xem phim, mình thấy các anh chị trong group F8 - Học lập trình để đi làm code ra web phim hay quá nên mình làm theo, website này của mình sẽ được cập nhật phim liên tục, mọi người hãy thử nha.</p>
                        </div>
                        <div className="project_item_action">
                            <Link to={"https://ndthah.vercel.app/"} className="btn_demo" target="_blank">
                            <button>
                                Demo
                            </button>
                            </Link>
                            <Link to={"https://github.com/nguyenducthanh04/ndt-profile"} className="btn_code" target="_blank">
                            <button>
                                Github
                            </button>
                            </Link>
                        </div>
                    </div>
                        <div className="project_item">
                        <div className="project_item_image">
                            <img src={Project2}></img>
                        </div>
                        <div className="project_item_desc">
                            <p>Dự án Nhà Thông Minh này mình làm để báo cáo kết thúc môn lập trình IOT, do là làm mô hình nhà thông minh và bị trường thu lại nên chỉ còn code github thôi mọi người tham khảo ở phần readme nhé. Bao gồm rất nhiều thức năng thông tin như mở cửa bằng khuôn mặt, thẻ từ, cảnh báo khí gas, cảnh báo ánh sáng, mở cửa thông qua ứng dụng, gửi cảnh báo thông qua ứng dụng,...</p>
                        </div>
                        <div className="project_item_action">
                            <Link to={"/"} className="btn_demo" target="_blank">
                            <button>
                                Demo
                            </button>
                            </Link>
                            <Link to={"https://github.com/nguyenducthanh04/Thiet-Ke-Nha-Thong-Minh"} className="btn_code" target="_blank">
                            <button>
                                Github
                            </button>
                            </Link>
                        </div>
                    </div>
                        <div className="project_item">
                        <div className="project_item_image">
                            <img src={Project3}></img>
                        </div>
                        <div className="project_item_desc">
                            <p>Dự án quản lý lớp học offline này mình làm khi mình còn là sinh viên năm nhất, dự án có khá nhiều module phức tạp, mới học nên code trông giống như bãi rác lắm, nhìn mà hoảng luôn, do là dự án backend và mình toàn chơi đồ free nên chưa deploy được lên cho mọi người xem, mọi người xem tạm code bãi rác nha hihi.</p>
                        </div>
                        <div className="project_item_action">
                            <Link to={"https://ndthah.vercel.app/"} className="btn_demo" target="_blank">
                            <button>
                                Demo
                            </button>
                            </Link>
                            <Link to={"https://github.com/nguyenducthanh04/Project-Thanh-Backend-k1"} className="btn_code" target="_blank">
                            <button>
                                Github
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default Project;