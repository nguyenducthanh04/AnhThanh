import React, { useRef, useState, useEffect } from "react";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import axios from "axios";

const API_URL = "https://68b040313b8db1ae9c0351c7.mockapi.io/blog";

const MyEditor = () => {
  const editorRef = useRef();
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get(API_URL);
      setBlogs(res.data.reverse()); 
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const editorInstance = editorRef.current.getInstance();
    const markdown = editorInstance.getMarkdown();

    let newPost = {
      title: title,
      content: markdown,
    };

    if (!editingId) {
      newPost.createdAt = new Date().toLocaleString("vi-VN", {
        timeZone: "Asia/Ho_Chi_Minh",
      });
    }

    try {
      setLoading(true);
      let res;
      if (editingId) {
        res = await axios.put(`${API_URL}/${editingId}`, newPost);
        alert("✅ Đã cập nhật bài viết!");
      } else {
        res = await axios.post(API_URL, newPost);
        alert("✅ Đã lưu bài viết mới!");
      }
      console.log("Saved:", res.data);
      setTitle("");
      editorInstance.setMarkdown("");
      setEditingId(null);
      fetchBlogs();
    } catch (error) {
      console.error("Error saving blog:", error);
      alert("❌ Lỗi khi lưu bài viết!");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (blog) => {
    setTitle(blog.title);
    editorRef.current.getInstance().setMarkdown(blog.content);
    setEditingId(blog.id);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Bạn có chắc muốn xóa bài viết này?")) return;
    try {
      await axios.delete(`${API_URL}/${id}`);
      alert("🗑 Đã xóa bài viết!");
      fetchBlogs();
    } catch (error) {
      console.error("Error deleting blog:", error);
      alert("❌ Lỗi khi xóa!");
    }
  };

  return (
    <div style={{ padding: "0 5%", maxWidth: "1000px", margin: "50px auto" }}>
      <h2 style={{ textAlign: "center", margin: "20px 0" }}>
        📝 Demo Toast UI Editor + MockAPI
      </h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", fontWeight: "bold" }}>
            Tiêu đề:
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Nhập tiêu đề..."
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              marginTop: "5px",
            }}
            required
          />
        </div>

        <Editor
          ref={editorRef}
          initialValue=""
          previewStyle="vertical"
          height="400px"
          initialEditType="markdown"
          useCommandShortcut={true}
          toolbarItems={[
            ["heading", "bold", "italic", "strike"],
            ["hr", "quote"],
            ["ul", "ol", "task", "indent", "outdent"],
            ["table", "image", "link"],
            ["code", "codeblock"],
          ]}
          hooks={{
            addImageBlobHook: async (blob, callback) => {
              const reader = new FileReader();
              reader.onloadend = () => {
                callback(reader.result, "image.png");
              };
              reader.readAsDataURL(blob);
            },
          }}
        />

        <button
          type="submit"
          disabled={loading}
          style={{
            marginTop: "15px",
            padding: "10px 20px",
            background: loading ? "#999" : "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {loading
            ? "Đang lưu..."
            : editingId
            ? "Cập nhật bài viết"
            : "Lưu bài viết"}
        </button>
      </form>

      <hr style={{ margin: "30px 0" }} />

      <h3 style={{ marginBottom: "15px" }}>📚 Danh sách bài viết</h3>
      {blogs.length === 0 ? (
        <p>📭 Chưa có bài viết nào.</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {blogs.map((blog) => (
            <div
              key={blog.id}
              style={{
                padding: "15px",
                border: "1px solid #ddd",
                borderRadius: "10px",
                background: "#fff",
                boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <h4 style={{ marginBottom: "10px" }}>{blog.title}</h4>
              <p style={{ fontSize: "13px", color: "#666", marginBottom: "10px" }}>
                🕒 {blog.createdAt || "Chưa có thời gian"}
              </p>
              <div
                style={{
                  maxHeight: "120px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  marginBottom: "10px",
                  fontSize: "14px",
                }}
                dangerouslySetInnerHTML={{
                  __html: blog.content.replace(/\n/g, "<br/>"),
                }}
              />
              <div style={{ marginTop: "auto" }}>
                <button
                  onClick={() => handleEdit(blog)}
                  style={{
                    marginRight: "10px",
                    padding: "5px 10px",
                    background: "#ffc107",
                    border: "none",
                    borderRadius: "3px",
                    cursor: "pointer",
                  }}
                >
                  ✏️ Sửa
                </button>
                <button
                  onClick={() => handleDelete(blog.id)}
                  style={{
                    padding: "5px 10px",
                    background: "#dc3545",
                    color: "#fff",
                    border: "none",
                    borderRadius: "3px",
                    cursor: "pointer",
                  }}
                >
                  🗑 Xóa
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyEditor;
