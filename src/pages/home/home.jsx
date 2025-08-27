import "./home.scss";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaInstagram} from "react-icons/fa";
import MediaQuery from "react-responsive";
import Avatar from "../../assets/images/thanh.jpg";
import Cover_Photo from "../../assets/images/bia.jpg";
import Giai1 from "../../assets/images/giaithuong1.jpg";
import Giai2 from "../../assets/images/giaithu2.jpg";
import Project1 from "../../assets/images/project_1.png";

function Home() {
    return (
        <>
        <div className="home_wrapper">
            <div className="home_content">
                <div className="cover_photo">
                    <img src="https://chiasekienthuc.com.vn/images/2023-03/Quy-tac-dat-ten-trong-JavaScript.jpg" />
                </div>
            <div className="home_avatar">
                <img src={Avatar} />
            </div>
        </div>
            <div className="home_user_name">
                <h1>Nguyễn Đức Thanh</h1>
            </div>
            <div className="socials">
                <Link to={"https://www.facebook.com/nguyen.uc.thanh.475548"} target="_blank" className="social_link">
                    <div className="social_icon">
                        <FaFacebook/>
                    </div>
                   </Link>
                   <Link to={"https://github.com/nguyenducthanh04"} target="_blank" className="social_link">
                    <div className="social_icon">
                        <FaGithub/>
                    </div>
                   </Link>
                   <Link to={"https://www.instagram.com/de.qing_/"} target="_blank" className="social_link">
                    <div className="social_icon">
                        <FaInstagram/>
                    </div>
                   </Link>
            </div>
            <div style={{padding:  '1% 5%'}}>
                <hr></hr>
            </div>
            <div className="achievements">
                <div className="achievements_title">
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
            <div className="projects">
                <div className="projects_title">
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
        </div>
    </>  
    )
}
export default Home;