import React, { useEffect, useState } from "react";
import { Footer } from "react-daisyui";
import { Link, useParams } from "react-router-dom";
import Topbar from "../components/Topbar";
import axios from "axios";
import NoticeContentItem from "./NoticeContentItem";

import "../styles/board/NoticeContent.scss";

const NoticeContent = ({}) => {
  const [contentItem, setContentItem] = useState([]);
  // const [selectNotice, setSelectNotice] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  // const onInsertToggle = () => {
  //   setInsertToggle((prev) => !prev);
  // };

  // const onRemove = async (id) => {
  //   const data = await axios.delete(`http://localhost:4000/notice/${id}`);
  //   setContentItem(data.data);
  // };

  // const Date = (contentItem.reg_date || "").split("T");
  // const contentText = `<pre>${contentItem.contents}</pre>`;
  const getItem = async (id) => {
    try {
      const data = await axios.get(`http://localhost:4000/notice/${id}`);
      setContentItem(data.data);
    } catch (e) {
      setError(e);
    }
  };

  useEffect(() => {
    getItem(id);
  }, [id]);

  return (
    <>
      <Topbar />
      <article className="notice-content">
        <div className="notice-main-title">공지사항</div>
        <div>
          <div className="notice-date">{contentItem.reg_date}</div>
          <nav className="numANDtitle">
            <div className="notice-content-num">{contentItem.id}</div>
            <div className="notice-content-title">{contentItem.title}</div>
          </nav>
          <div className="notice-content-text">{contentItem.contents}</div>
        </div>
        <nav className="notice-content-btn">
          <button className="btn mod-btn">수정</button>

          <button className="btn del-btn">삭제</button>

          <Link to={`/NoticeBoard`}>
            <button className="btn list-btn">목록</button>
          </Link>
        </nav>
      </article>
      <Footer />
    </>
  );
};

export default NoticeContent;
