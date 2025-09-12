import "./project.scss";
import { useContext } from "react";
import { ThemeContext } from "../../layouts/main/main_layout";
import { Link } from "react-router-dom";
import Movie from "../../assets/images/movie.jpg";

function Project() {
    const theme = useContext(ThemeContext);
    const products = [
    {
      id: 1,
      name: 'Movie Web',
      description: 'Xem phim miễn phí, cập nhật liên tục',
      image: Movie,
      link: "https://ndthah.vercel.app/"
    },
  ];
    return (
            <div className="project">
                    <div className={ theme === "dark" ? "project_title_dark" : "project_title"}>
                        <h3>Sản phẩm</h3>
                    </div>
                    <div className="product_list">
                        {products.map((product) => (
                            <div className="product_item" key={product.id}>
                            <img className="product_image" src={product.image}></img>
                            <Link to={product.link} className="project_link">
                            <p className={ theme === "light" ? "project_name" : "project_name_dark"}>{product.name}</p>
                            </Link>
                            <p className={theme === "light" ? "project_content" : "project_content_dark"}>{product.description}</p>
                        </div>
                        ))}
                    </div>
                </div>
    )
}
export default Project;