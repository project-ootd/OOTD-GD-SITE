import React from "react";
import "../styles/sub_detail/SubDetailMan.scss";

import { Link } from "react-router-dom";
import Buybtn from "../btn/BuybtnMan";
import ShoppingCart from "../btn/ShoppingCart";
import FavoritCheck from "../btn/FavoritCheck";

const SubDetailKids = () => {
  return (
    <>
      <div>
        <p className="title_name">
          {" "}
          심플베이직 각인 Love Me 10K Gold 커플링 <span>LRW19011T</span>
        </p>
        <div className="sub_box flex">
          <div className="img-box">
            <img
              src="https://image.msscdn.net/images/goods_img/20201204/1713630/1713630_1_500.jpg?t=20201204105700"
              alt=""
            />
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
                  <p className="p1">OOTDAC BY BEST MAISTER Bong / LRW19011T</p>
                  <p className="p2">10.9천 회 이상</p>
                  <p className="p3">5,000개 이상</p>
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
                  <p className="p1">129,000원</p>
                  <div className="p2">
                    {" "}
                    89,000원 ~ 99,000원
                    <br />
                    <div className="coupon-btn">
                      <Link to="/">쿠폰받기</Link>
                    </div>
                  </div>
                  <p className="p3">최대 1,050원</p>
                </div>
              </div>
            </div>
            <hr />
            <div className="buy-btn-box flex">
              <div className="buy">
                <Link to="/BuyRing">
                  <Buybtn />
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
    </>
  );
};
export default SubDetailKids;
