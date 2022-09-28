import React, { useEffect, useState } from "react";
import "../styles/Main.scss";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import NoticeList from "../board/NoticeList";
import MainNotice from "../board/MainNotice";

const MainPG = () => {
  // const { id } = useParams();
  // const [contentLimitItem, setContentLimitItem] = useState([]);
  // const [error, setError] = useState(null);

  // // const getItem = async () => {
  // //   try {
  // //     const data = await axios.get(`http://localhost:4000/mainNotice`);
  // //     setContentLimitItem(data.data);
  // //   } catch (e) {
  // //     setError(e);
  // //   }
  // // };

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const data = await axios.get(`http://localhost:4000/mainNotice`);
  //       setContentLimitItem(data.data);
  //     } catch (e) {
  //       setError(e);
  //     }
  //   };
  //   getData();
  // }, []);

  // console.log("MainPG : without useEffect");
  // console.log(contentLimitItem[0]);

  return (
    <div className="Main-pg">
      <section className="main-img">
        <div className="img">
          <div className="content">
            <h1>Welcome to</h1>
            <h2>OOTD</h2>
          </div>
          <div className="img-cover" />
        </div>
      </section>
      {/*  공지사항  */}
      <article className="con con2">
        <div className="notice">
          <ul className="notice-top">
            <li>
              <Link to={`/NoticeBoard`}>NOTICE</Link>
            </li>
          </ul>
          <ul className="notice-list">
            {/* {contentLimitItem.map((contentLimitItem, index) => {
              return (
                <MainNotice
                  contentLimitItem={contentLimitItem}
                  setContentLimitItem={setContentLimitItem}
                  key={index}
                />
              );
            })} */}
          </ul>
        </div>
        {/* 이벤트 */}
        <div className="event">
          <ul className="event-top">
            <li>
              <Link to={`/`}>EVENT</Link>
            </li>
          </ul>
          <ul className="event-list">
            <li>
              <Link to={`/`}>5. 수영복 특가할인행사(8/1~8/15)</Link>
            </li>
            <li>
              <Link to={`/`}>4. 여름맞이 할인행사(7/1~7/14)</Link>
            </li>
            <li>
              <Link to={`/`}>3. 여름방학맞이 키즈상품 할인행사(6/1~6/20)</Link>
            </li>
            <li>
              <Link to={`/`}>2. 가입자 100만 돌파기념 할인행사(5/20~5/31)</Link>
            </li>
            <li>
              <Link to={`/`}>1. 새분기 새학기맞이 행사(3/2~3/15)</Link>
            </li>
          </ul>
        </div>
      </article>
      {/* 공지사항/이벤트 */}
      {/* 최하단 회사정보 */}
    </div>
  );
};

export default MainPG;
