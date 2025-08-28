import "./blog.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { Viewer } from "@toast-ui/react-editor";  
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import Avatar from "../../assets/images/thanh.jpg";

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    axios
      .get("https://68b040313b8db1ae9c0351c7.mockapi.io/blog")
      .then((res) => setBlogs(res.data))
      .catch((err) => console.error("Lỗi khi gọi API:", err));
  }, []);

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
              <img
                src={item.avatar || Avatar}
                alt="avatar"
              />
              <div className="blog_meta">
                <h4>{item.author || "Nguyễn Đức Thanh"}</h4>
                <span>
                  {item.createdAt
                    ? item.createdAt
                    : ""}
                </span>
              </div>
            </div>
            <div className="blog_body">
              <h3>{item.title}</h3>
              <p>{(item.content || "").substring(0, 100)}...</p>
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
          <div className="modal_content" onClick={(e) => e.stopPropagation()}>
            <button className="close_btn" onClick={() => setSelectedBlog(null)}>
              ✖
            </button>
            <h2>{selectedBlog.title}</h2>
            <p>
              <b>{selectedBlog.author || "Nguyễn Đức Thanh"}</b> •{" "}
              {selectedBlog.createdAt
                ? selectedBlog.createdAt
                : ""}
            </p>
            <div className="modal_body">
              <Viewer initialValue={selectedBlog.content || ""} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Blog;
