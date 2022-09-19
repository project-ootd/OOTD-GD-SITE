import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/ShoppingCart.scss";
import ShoppingListItem from "../DetailPage/ShoppingListItem";
import axios from "axios";

const ShoppingCart = () => {
  const [CartArr, SetCartArr] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await axios({
        url: `http://localhost:4000/SBP`,
      });
    };
  }, []);

  return (
    <div className="Shopping-Main">
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>상품 명</th>
              <th>상품 개수</th>
              <th>상품 가격</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <ShoppingListItem />
          </tbody>
          {/** 구매 취소 버튼 */}
          <tfoot style={{ width: "100%" }}>
            <tr>
              <th />
              <th>돌아가기</th>
              <th>결제하기</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default ShoppingCart;
