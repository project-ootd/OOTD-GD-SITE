import React from "react";
import { Link } from "react-router-dom";

import Login from "./Login";

import "../styles/MainPage.scss";

const MainPage = () => {
  return (
    <div>
      <header>
        <h1>
          <Link to="#">OOTD</Link>
        </h1>
        <nav className="top-bar">
          <ul>
            <li>
              <Link to="#">Man</Link>
              <ul>
                <li>
                  <Link to="#">Summer</Link>
                  <ul>
                    <li>
                      <Link to="#">Shirts</Link>
                    </li>
                    <li>
                      <Link to="#">Pants</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="#">Winter</Link>
                  <ul>
                    <li>
                      <Link to="#">Shirts</Link>
                    </li>
                    <li>
                      <Link to="#">Pants</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <Link to="WGDP">Woman</Link>
              <ul>
                <li>
                  <Link to="#">Summer</Link>
                  <ul>
                    <li>
                      <Link to="#">Shirts</Link>
                    </li>
                    <li>
                      <Link to="#">Pants</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="#">Winter</Link>
                  <ul>
                    <li>
                      <Link to="#">Shirts</Link>
                    </li>
                    <li>
                      <Link to="#">Pants</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <Link to="#">Kids</Link>
              <ul>
                <li>
                  <Link to="#">Summer</Link>
                  <ul>
                    <li>
                      <Link to="#">Shirts</Link>
                    </li>
                    <li>
                      <Link to="#">Pants</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="#">Winter</Link>
                  <ul>
                    <li>
                      <Link to="#">Shirts</Link>
                    </li>
                    <li>
                      <Link to="#">Pants</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <Link to="#">Accessory</Link>
              <ul>
                <li>
                  <Link to="#">Ring</Link>
                  <ul>
                    <li>
                      <Link to="#">Gold</Link>
                    </li>
                    <li>
                      <Link to="#">Diamond</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="#">Necklace</Link>
                  <ul>
                    <li>
                      <Link to="#">Gold</Link>
                    </li>
                    <li>
                      <Link to="#">Diamond</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </nav>

        <Login />
      </header>
      {/* Top bar */}
      {/* 메인 사진 */}
      <div className="main-pic con">
        <img src="https://picsum.photos/1500/500" alt="" />
      </div>
      {/* 공지사항/이벤트 */}
      <section className="con con2">
        {/*  공지사항  */}
        <div className="announce">
          <ul className="announce-top">
            <li>
              <Link to="#">ANNOUNCE</Link>
            </li>
          </ul>
          <ul className="announce-list">
            <li>
              <Link to="#">5. 침수로 인한 배송지연 안내</Link>
            </li>
            <li>
              <Link to="#">4. 상담센터 증설 안내</Link>
            </li>
            <li>
              <Link to="#">3. 서비스 확장에 따른 임시휴무 안내</Link>
            </li>
            <li>
              <Link to="#">2. 입고 지연 안내</Link>
            </li>
            <li>
              <Link to="#">
                1. 인터넷 쇼핑몰 입점 안내(쿠팡, G-market, Amazon)
              </Link>
            </li>
          </ul>
        </div>
        {/* 이벤트 */}
        <div className="event">
          <ul className="event-top">
            <li>
              <Link to="#">EVENT</Link>
            </li>
          </ul>
          <ul className="event-list">
            <li>
              <Link to="#">5. 수영복 특가할인행사(8/1~8/15)</Link>
            </li>
            <li>
              <Link to="#">4. 여름맞이 할인행사(7/1~7/14)</Link>
            </li>
            <li>
              <Link to="#">3. 여름방학맞이 키즈상품 할인행사(6/1~6/20)</Link>
            </li>
            <li>
              <Link to="#">2. 가입자 100만 돌파기념 할인행사(5/20~5/31)</Link>
            </li>
            <li>
              <Link to="#">1. 새분기 새학기맞이 행사(3/2~3/15)</Link>
            </li>
          </ul>
        </div>
      </section>
      {/* 공지사항/이벤트 */}
      {/* 최하단 회사정보 */}
      <footer className="company">
        <ul>
          <li>주식회사 OOTD</li>
          <li>본사 : 서울시 강남구 테헤란로 14길 15 SBS Building</li>
          <li>사업자등록번호 : 123-4567-890</li>
          <li>물류센터 : 경상남도 양산시 물금읍 증산리 848-5</li>
          <li>고객센터 : 1600-5252</li>
          <li>고객센터 운영시간 : 평일 09:00~18:00</li>
          <li>Copyright ⓒ OOTD All rights reserved.</li>
        </ul>
      </footer>
    </div>
  );
};
export default MainPage;
