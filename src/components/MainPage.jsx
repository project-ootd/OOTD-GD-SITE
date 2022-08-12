import React from "react";
import MainPage from "../styles/MainPage.scss";

const MainPage = ({}) => {
  return (
    <>
      <header>
        <h1>
          <a href="#">OOTD</a>
        </h1>
        <nav class="top-bar">
          <ul>
            <li>
              <a href="#">Man</a>
              <ul>
                <li>
                  <a href="#">Summer</a>
                  <ul>
                    <li>
                      <a href="#">Shirts</a>
                    </li>
                    <li>
                      <a href="#">Pants</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Winter</a>
                  <ul>
                    <li>
                      <a href="#">Shirts</a>
                    </li>
                    <li>
                      <a href="#">Pants</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li>
              <a href="#">Woman</a>
              <ul>
                <li>
                  <a href="#">Summer</a>
                  <ul>
                    <li>
                      <a href="#">Shirts</a>
                    </li>
                    <li>
                      <a href="#">Pants</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Winter</a>
                  <ul>
                    <li>
                      <a href="#">Shirts</a>
                    </li>
                    <li>
                      <a href="#">Pants</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li>
              <a href="#">Kids</a>
              <ul>
                <li>
                  <a href="#">Summer</a>
                  <ul>
                    <li>
                      <a href="#">Shirts</a>
                    </li>
                    <li>
                      <a href="#">Pants</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Winter</a>
                  <ul>
                    <li>
                      <a href="#">Shirts</a>
                    </li>
                    <li>
                      <a href="#">Pants</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li>
              <a href="#">Accessory</a>
              <ul>
                <li>
                  <a href="#">Ring</a>
                  <ul>
                    <li>
                      <a href="#">Gold</a>
                    </li>
                    <li>
                      <a href="#">Diamond</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Necklace</a>
                  <ul>
                    <li>
                      <a href="#">Gold</a>
                    </li>
                    <li>
                      <a href="#">Diamond</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </nav>

        <nav className="buttons">
          <input
            type="text"
            placeholder="ID"
            style="width:100px;height:20px;"
            maxlength="14"
          ></input>
          <input
            type="password"
            placeholder="Password"
            style="width:100px;height:20px;"
            maxlength="16"
          ></input>
          <button>Login</button>
          <button>Sign in</button>
        </nav>
      </header>

      <div className="main-pic con">
        <img src="https://picsum.photos/1500/500" alt="" />
      </div>

      <section className="con con2">
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
      </section>

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
    </>
  );
};

export default MainPage;
