import About from "../../components/about/about";
import Project from "../../components/project/project";
import Achiement from "../../components/achiement/achiement";
import Contect from "../../components/contect/contect";
import Blog from "../../components/blog/blog";
import MediaQuery from "react-responsive";
import "./home.scss";
function Home() {
    return (
        <>
        <MediaQuery minWidth={1024}>
            <div className="home_wrapper">
            <div className="main">
                <About/>
                <Project/>
                <Achiement/>
                <Blog/>
                <Contect/>
            </div>
        </div>
        </MediaQuery>
        <MediaQuery maxWidth={767}>
            <div className="home_wrapper_mobile">
                <About/>
                <Project/>
                <Achiement/>
                <Blog/>
                <Contect/>
            </div>
        </MediaQuery>
        </>
    )
} 
export default Home;