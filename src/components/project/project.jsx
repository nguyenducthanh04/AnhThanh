import "./project.scss";
import Avatar from "../../assets/images/thanh.jpg";
import { Link } from "react-router-dom";

function Project() {
    return (
            <div className="project">
                    <div className="project_title">
                        <h3>Sản phẩm</h3>
                    </div>
                    <div className="product_list">
                        <div className="product_item">
                            <img className="product_image" src={Avatar}></img>
                            <Link to={"/"} className="project_link">
                            <p className="project_name">NguyenDucThanh</p>
                            </Link>
                            <p className="project_content">Học IELTS hiệu quả qua bài tập tương tác</p>
                        </div>
                         <div className="product_item">
                            <img className="product_image" src={Avatar}></img>
                            <Link to={"/"} className="project_link">
                            <p className="project_name">NguyenDucThanh</p>
                            </Link>
                            <p className="project_content">Học IELTS hiệu quả qua bài tập tương tác</p>
                        </div>
                        <div className="product_item">
                            <img className="product_image" src={Avatar}></img>
                            <Link to={"/"} className="project_link">
                            <p className="project_name">NguyenDucThanh</p>
                            </Link>
                            <p className="project_content">Học IELTS hiệu quả qua bài tập tương tác</p>
                        </div>
                    </div>
                </div>
    )
}
export default Project;