import React from "react";
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
          제나플리츠스커트 <span>JENA PLITS SKURT</span>
        </p>
        <div className="sub_box flex">
          <div className="img-box">
            <img
              src="https://jkids.co.kr/shopimages/verysweet/0030020003613.jpg?1660785967"
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
                  <p className="p1">UASKIdsShop / UASK-001</p>
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
                  <p className="p1">16,900원</p>
                  <div className="p2">
                    {" "}
                    10,000원 ~ 13,000원
                    <br />
                    <div className="coupon-btn">
                      <Link to="/">쿠폰받기</Link>
                    </div>
                  </div>
                  <p className="p3">최대 650원</p>
                </div>
              </div>
            </div>
            <hr />
            <div className="buy-btn-box flex">
              <div className="buy">
                <Link to="/BuyKids">
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
