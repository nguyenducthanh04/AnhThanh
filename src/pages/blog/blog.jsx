import React, { useState } from "react";
import MyEditor from "../../components/Editor/editor";
import "./blog.scss";

function Blog() {
  const [password, setPassword] = useState(""); 
  const [isAuthorized, setIsAuthorized] = useState(false); 
  const correctPassword = "123456"; 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthorized(true); 
    } else {
      alert("Mật khẩu sai! Vui lòng thử lại.");
      setPassword(""); 
    }
  };

  if (!isAuthorized) {
    return (
      <div className="password_wrapper" style={{ textAlign: "center", marginTop: "100px" }}>
        <h2>Vui lòng nhập mật khẩu</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mật khẩu"
            style={{ padding: "10px", fontSize: "16px" }}
          />
          <button type="submit" style={{ padding: "10px 20px", marginLeft: "10px" }}>
            Xác nhận
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="blog_wrapper">
      <MyEditor />
    </div>
  );
}

export default Blog;
