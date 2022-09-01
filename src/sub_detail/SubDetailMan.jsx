import React from "react";
import "../styles/sub_detail/SubDetailMan.scss";

import { Link } from "react-router-dom";
import BuybtnMan from "../btn/BuybtnMan";
import ShoppingCart from "../btn/ShoppingCart";
import FavoritCheck from "../btn/FavoritCheck";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";

const SubDetailMan = ({ prdId, prdName, prdEName, prdPrice, prdImg }) => {
  return (
    <>
      <Topbar />
      <div>
        <p className="title_name">
          {" "}
          {prdName}
          <span>{prdEName}</span>
        </p>
        <div className="sub_box flex">
          <div className="img-box">
            <img src={prdImg} alt="Avatar Tailwind CSS Component" />
          </div>

          <div className="product-text">
            <div className="text-wrap">
              <h2>
                Product Info <span>제품정보</span>
              </h2>
              <div className="text-box1 flex">
                <div className="text1">
                  <p className="p1">브랜드/품번</p>
                  <p className="p2">조회수(1개월)</p>
                  <p className="p3">누적판매(1년)</p>
                  <p className="p4">구매후기</p>
                </div>
                <div className="text2">
                  <p className="p1">{prdId}</p>
                  <p className="p2">5.9천 회 이상</p>
                  <p className="p3">300개 이상</p>
                  <p className="p4">
                    ★★★★★ <span>4.7</span>
                  </p>
                </div>
              </div>
            </div>
            <hr />
            <div className="price-wrap">
              <h2>
                Price Info <span>가격정보</span>
              </h2>
              <div className="text-box1 flex">
                <div className="text1">
                  <p className="p1">OOTD 판매가</p>
                  <p className="p2">OOTD 회원가</p>
                  <p className="p3">OOTD 적립금</p>
                </div>
                <div className="text2">
                  <p className="p1">{prdPrice}</p>
                  <div className="p2">
                    {" "}
                    27,358 ~ 29,900원 <br />
                    <div className="coupon-btn">
                      <Link to="/Test1">쿠폰받기</Link>
                    </div>
                  </div>
                  <p className="p3">최대 1,592원</p>
                </div>
              </div>
            </div>
            <hr />
            <div className="buy-btn-box flex">
              <div className="buy">
                <Link to="/BuyMan">
                  <BuybtnMan />
                </Link>
              </div>
              <div className="cart">
                <ShoppingCart />
              </div>
              <div className="heart">
                <FavoritCheck />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default SubDetailMan;
