import About from "../../components/about/about";
import Project from "../../components/project/project";
import Achiement from "../../components/achiement/achiement";
import Contect from "../../components/contect/contect";
import Blog from "../../components/blog/blog";
import { useContext } from "react";
import { ThemeContext } from "../../layouts/main/main_layout";
import "./home.scss";
function Home() {
    const theme = useContext(ThemeContext);
    return (
        <div className="home_wrapper">
            <div className="main">
                <About/>
                <Project/>
                <Achiement/>
                <Blog/>
                <Contect/>
            </div>
        </div>
    )
} 
export default Home;