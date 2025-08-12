import "./home.scss";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";
import Avatar from "../../assets/images/avatar.jpg";
function Home() {
    return (
        <>
      <MediaQuery maxWidth={767}>
        <div className="home_wrapper_mobile">
            <div className="avatar_mobile">
                <img src={Avatar} alt="Avatar"></img>
            </div>
            <div className="about_mobile">
                  <div className="about_title_mobile">
                    <h1>I'm Nguyen Duc Thanhh</h1>
                </div>
                <div className="about_content_mobile">
                    <span>
                        Hello mọi người! Mình là Thanh, đang là sinh viên ngành Công Nghệ Thông Tin. Cơ duyên mình đến với IT là nhờ các sự tích "IT là vua của các nghề", hay câu chuyện "thằng em học BK cơ khí sinh năm 96. Tháng 5/2021, tình cờ biết đến cộng đồng F8 Fullstack của anh Sơn, mình đã hoàn thành các khóa học HTML, CSS, ReactJS và có được một số dự án cá nhân. Trải qua nhiều cay đắng, thật sự cảm ơn anh Sơn cũng như cộng đồng anh em đóng góp đã truyền động lực cho mình suốt thời gian qua giúp mình không bỏ cuộc."
                    </span>
                </div>
                <div className="about_btn_mobile">
                    <div className="btn_portfolio_mobile">
                        <Link to="" className="btn_link">PORTFOLIO</Link>
                    </div>
                     <div className="btn_about_mobile">
                        <Link to="" className="btn_link">ABOUT</Link>
                    </div>
                </div>
            </div>
        </div>
      </MediaQuery>
       <MediaQuery minWidth={768}>
         <div className="home_wrapper">
            <div className="avatar">
                <img src={Avatar} alt="Avatar"></img>
            </div>
            <div className="about">
                <div className="about_title">
                    <h1 className="about_name">I'm Nguyen Duc Thanh</h1>
                </div>
                <div className="about_content">
                    <span>
                        Hello mọi người! Mình là Thanh, đang là sinh viên ngành Công Nghệ Thông Tin. Cơ duyên mình đến với IT là nhờ các sự tích "IT là vua của các nghề", hay câu chuyện "thằng em học BK cơ khí sinh năm 96. Tháng 5/2021, tình cờ biết đến cộng đồng F8 Fullstack của anh Sơn, mình đã hoàn thành các khóa học HTML, CSS, ReactJS và có được một số dự án cá nhân. Trải qua nhiều cay đắng, thật sự cảm ơn anh Sơn cũng như cộng đồng anh em đóng góp đã truyền động lực cho mình suốt thời gian qua giúp mình không bỏ cuộc."
                    </span>
                </div>
                <div className="about_btn">
                    <div className="btn_portfolio">
                        <Link to="" className="btn_link">PORTFOLIO</Link>
                    </div>
                     <div className="btn_about">
                        <Link to="" className="btn_link">ABOUT</Link>
                    </div>
                </div>
            </div>
        </div>
      </MediaQuery>
    </>  
    )
}
export default Home;