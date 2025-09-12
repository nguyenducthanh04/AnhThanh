import "./blog.scss";
import { useState, useEffect } from "react";
import { Viewer } from "@toast-ui/react-editor";  
import axios from "axios";
import { useContext } from "react";
import { ThemeContext } from "../../layouts/main/main_layout";
function Blog () {
      const [blogs, setBlogs] = useState([]);
      const [selectedBlog, setSelectedBlog] = useState(null);
      const theme = useContext(ThemeContext);
  useEffect(() => {
    axios
      .get("https://68b040313b8db1ae9c0351c7.mockapi.io/blog")
      .then((res) => setBlogs(res.data))
      .catch((err) => console.error("Lỗi khi gọi API:", err));
  }, []);
    return (
         <div className="blog">
                    <div className="blog_title">
                        <h3 style={theme === "light" ? {} : {color: "white"}}>Blog</h3>
                    </div>
                    <div className="blog_list">
                      {blogs.map((blog) => (
                        <div className="blog_item" key={blog.id} onClick={() => setSelectedBlog(blog)}>
                        <div className="blog_item_wrap">
                          <h4 style={theme === "light" ? {} : {color: "white"}}>{blog.title}</h4>
                          <p>{(blog.content || "").substring(0, 100)}...</p>
                        </div>
                      </div>
                      ))}
                    </div>
                          {selectedBlog && (
                            <div className="modal_overlay" onClick={() => setSelectedBlog(null)}>
                              <div className={ theme === "light" ? "modal_content" : "modal_content_dark"} onClick={(e) => e.stopPropagation()}>
                                <button className={ theme === "light" ? "close_btn" : "close_btn_dark"} onClick={() => setSelectedBlog(null)}>
                                  ✖
                                </button>
                                <h3 style={ theme === "light" ? {margin: 0} : {margin: 0, color: "white"}}>{selectedBlog.title}</h3>
                                <div className="modal_body">
                                  <Viewer initialValue={selectedBlog.content || ""} />
                                </div>
                              </div>
                            </div>
                          )}
                </div>
    )
}
export default Blog;