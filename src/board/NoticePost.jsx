import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import { Link, useParams } from "react-router-dom";
import "../styles/board/NoticePost.scss";
import axios from "axios";

const NoticePost = () => {
  const [notice, setNotice] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);

  const onInsert = async (title, content) => {
    try {
      const data = await axios.post("http://localhost:4000/Notice2", {
        title,
        content,
      });
      setNotice(data.data);
    } catch (e) {
      setError(e);
    }
  };

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onInsert(title, content);
    setTitle("");
    setContent("");
  };

  return (
    <>
      <Topbar />
      <form className="NoticeTitle" onSubmit={onSubmit}>
        <h1 className="Notice-h1">공지사항 등록</h1>
        <br />
        <div className="notice-title">
          <input
            type="text"
            name=""
            id={title}
            placeholder="제목을 입력하세요."
            style={{
              width: "1500px",
              border: "1px solid gray",
            }}
            onChange={onChangeTitle}
            value={title}
          />
        </div>
        <br />
        <CKEditor
          className="Editor"
          editor={ClassicEditor}
          config={{ placeholder: "내용을 입력하세요." }}
          data=""
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          onChangeContent={(event, editor) => {
            const data = editor.getData();
            console.log("text를 받아오는 중");
            console.log({ event, editor, data });
            setContent(data);
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
          value={content}
        />

        <article className="Notice-btn">
          <button className="btn">등록</button>
          <Link to={`/NoticeBoard`}>
            <button className="btn">돌아가기</button>
          </Link>
        </article>
      </form>
      <Footer />
    </>
  );
};

export default NoticePost;
