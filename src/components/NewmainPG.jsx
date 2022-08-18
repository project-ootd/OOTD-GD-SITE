import React from "react";
import "../styles/NewmainPG.scss";
import Topbar from "./Topbar";

const NewmainPG = () => {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
      />
      <Topbar />
      <section>
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
        <div className="announce">
          <ul className="announce-top">
            <li>
              <a href="#">ANNOUNCE</a>
            </li>
          </ul>
          <ul className="announce-list">
            <li>
              <a href="#">5. 침수로 인한 배송지연 안내</a>
            </li>
            <li>
              <a href="#">4. 상담센터 증설 안내</a>
            </li>
            <li>
              <a href="#">3. 서비스 확장에 따른 임시휴무 안내</a>
            </li>
            <li>
              <a href="#">2. 입고 지연 안내</a>
            </li>
            <li>
              <a href="#">1. 인터넷 쇼핑몰 입점 안내(쿠팡, G-market, Amazon)</a>
            </li>
          </ul>
        </div>
        {/* 이벤트 */}
        <div className="event">
          <ul className="event-top">
            <li>
              <a href="#">EVENT</a>
            </li>
          </ul>
          <ul className="event-list">
            <li>
              <a href="#">5. 수영복 특가할인행사(8/1~8/15)</a>
            </li>
            <li>
              <a href="#">4. 여름맞이 할인행사(7/1~7/14)</a>
            </li>
            <li>
              <a href="#">3. 여름방학맞이 키즈상품 할인행사(6/1~6/20)</a>
            </li>
            <li>
              <a href="#">2. 가입자 100만 돌파기념 할인행사(5/20~5/31)</a>
            </li>
            <li>
              <a href="#">1. 새분기 새학기맞이 행사(3/2~3/15)</a>
            </li>
          </ul>
        </div>
      </article>
      {/* 공지사항/이벤트 */}
      {/* 최하단 회사정보 */}
    </div>
  );
};
export default NewmainPG;
