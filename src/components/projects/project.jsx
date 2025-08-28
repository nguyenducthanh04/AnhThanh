import "./project.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../layouts/main/main_layout";
import Project1 from "../../assets/images/project_1.png";

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
                </div>
            </div>
    )
}
export default Project;