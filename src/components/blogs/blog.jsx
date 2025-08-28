import "./blog.scss";
import { useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "../../layouts/main/main_layout";
import Avatar from "../../assets/images/thanh.jpg";

const blogs = [
  {
    id: 1,
    author: "Nguyễn Đức Thanh",
    time: "một tháng trước",
    category: "Kinh nghiệm",
    title: "Tại Sao Redis Cache Giúp Tăng Tốc Website Rõ Rệt?",
    desc: "Redis là in-memory key-value store, nên có tốc độ truy xuất cực nhanh (microseconds). Vậy chúng ta có thể cache những gì? - Query database (kết quả truy vấn nặng) - HTML full page (Full Page Cache) - Session / Auth - Config, route, view",
    avatar: Avatar, 
  },
  {
    id: 2,
    author: "Nguyễn Văn A",
    time: "2 tháng trước",
    category: "Lập trình",
    title: "React Context và useReducer trong quản lý state",
    desc: "Khi ứng dụng React trở nên phức tạp, việc quản lý state toàn cục là vấn đề lớn...",
    avatar: Avatar,
  },
];

function Blog() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <div className="blogs">
      <div className="blog_title">
        <h1>Bài viết</h1>
      </div>

      <div className="blog_list">
        {blogs.map((item) => (
          <div
            className="blog_card"
            key={item.id}
            onClick={() => setSelectedBlog(item)}
          >
            <div className="blog_header">
              <img src={item.avatar} alt="avatar" />
              <div className="blog_meta">
                <h4>{item.author}</h4>
                <span>
                  {item.time} • {item.category}
                </span>
              </div>
            </div>
            <div className="blog_body">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
            <div className="blog_footer">
              <span>👍 0</span>
              <span>💬 0</span>
              <span>↗️</span>
            </div>
          </div>
        ))}
      </div>
      {selectedBlog && (
        <div className="modal_overlay" onClick={() => setSelectedBlog(null)}>
          <div
            className="modal_content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close_btn" onClick={() => setSelectedBlog(null)}>
              ✖
            </button>
            <h2>{selectedBlog.title}</h2>
            <p><b>{selectedBlog.author}</b> • {selectedBlog.time}</p>
            <div className="modal_body">
              <p>{selectedBlog.desc}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Blog;