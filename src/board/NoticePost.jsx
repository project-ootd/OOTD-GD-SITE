import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import { Link, useParams } from "react-router-dom";
import "../styles/board/NoticePost.scss";

const NoticePost = ({ onInsert }) => {
  const [value, setValue] = useState("");
  const [content, setContent] = useState("");

  const onchange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <Topbar />
      <h1 className="Notice-h1">공지사항 등록</h1>
      <div className="notice-title">
        <input type="text" name="" id="" style={{ border: "5px solid gold" }} />
      </div>
      <CKEditor
        className="Editor"
        editor={ClassicEditor}
        data=""
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
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
      />

      <article className="Notice-btn">
        <button className="btn">등록</button>
        <Link to={`/NoticeBoard`}>
          <button className="btn">돌아가기</button>
        </Link>
      </article>
      <Footer />
    </>
  );
};

export default NoticePost;
