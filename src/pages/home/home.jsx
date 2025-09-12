import About from "../../components/about/about";
import Project from "../../components/project/project";
import Achiement from "../../components/achiement/achiement";
import Contect from "../../components/contect/contect";
import "./home.scss";
function Home() {
     const products = [
    {
      id: 1,
      name: 'EnglishFast',
      description: 'Học IELTS hiệu qua bài tập tương tác',
      image: 'https://z-cdn-media.chatglm.cn/files/633cc236-4c66-4248-ab88-65d89ceb9fa6_pasted_image_1757609296144.png?auth_key=1789145352-9677ee9ea1aa408dbeb4aabd89774c34-0-7525f6b0beee6f3ee2573ddd6c732b04'
    },
    {
      id: 2,
      name: 'Contentfast',
      description: 'Tiết kiệm hàng giờ tạo content mạng xã hội',
      image: 'https://z-cdn-media.chatglm.cn/files/633cc236-4c66-4248-ab88-65d89ceb9fa6_pasted_image_1757609296144.png?auth_key=1789145352-9677ee9ea1aa408dbeb4aabd89774c34-0-7525f6b0beee6f3ee2573ddd6c732b04'
    }
  ];

    return (
        <div className="home_wrapper">
            <div className="main">
                <About/>
                <Project/>
                <Achiement/>
                <div className="blog">
                    <div className="blog_title">
                        <h3>Blog</h3>
                    </div>
                    <div className="blog_list">
                      <div className="blog_item">
                        <div className="blog_item_wrap">
                          <h4>Cuộc đời mới của tôi</h4>
                          <p>haaaaaaaaaaaaaaaaaaaaaaaaaaannn</p>
                        </div>
                      </div>
                       <div className="blog_item">
                        <div className="blog_item_wrap">
                          <h4>Cuộc đời mới của tôi</h4>
                          <p>haaaaaaaaaaaaaaaaaaaaaaaaaaannn</p>
                        </div>
                      </div>
                    </div>
                </div>
                <Contect/>
            </div>
        </div>
    )
} 
export default Home;